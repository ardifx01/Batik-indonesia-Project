import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Logo from "@/assets/logo_B_nobg.png";
import { useAuth } from "@/hooks/useAuth";

const sections = ["home", "sejarah", "galeri", "budaya_tradisi", "eco-batik"] as const;
type Section = (typeof sections)[number];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("home");
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Reset scroll & set active berdasarkan URL saat ini
  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.pathname === "/") {
      setActiveSection("home");
      return;
    }

    // Ambil segmen pertama setelah "/"
    const slug = (location.pathname.split("/")[1] || "home") as Section;

    if (sections.includes(slug)) {
      setActiveSection(slug);
    } else {
      setActiveSection("home");
    }
  }, [location.pathname]);

  // Scroll smooth ke section (untuk halaman "/")
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Klik navbar
  const handleNavClick = (id: Section) => {
    if (location.pathname === "/") {
      // Di home: scroll ke section
      setActiveSection(id); // highlight segera
      scrollToSection(id);
    } else {
      // Di halaman lain: pindah route
      setActiveSection(id);
      navigate(id === "home" ? "/" : `/${id}`);
    }
  };

  // Observer section aktif (hanya di home)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { threshold: 0.4 }
    );

    // Observe hanya section yang memang ada di home
    ["home", "sejarah", "galeri", "budaya_tradisi", "eco-batik"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      ["home", "sejarah", "galeri", "budaya_tradisi", "eco-batik"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [location.pathname]);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 md:top-5 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border max-w-5xl mx-auto md:rounded-xl shadow-md shadow-stone-900/20 dark:shadow-slate-100/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img src={Logo} alt="Logo" className="h-10 w-10" />
              <h1 className="text-2xl font-bold text-foreground">
                atiX<span className="text-orange">.</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {sections.map((id) => (
                <Button key={id} variant="nav" size="sm" onClick={() => handleNavClick(id)} className={activeSection === id ? "text-orange font-bold" : "text-foreground"} aria-current={activeSection === id ? "page" : undefined}>
                  {id === "budaya_tradisi" ? "Budaya & Tradisi" : id === "eco-batik" ? "Eco-Batik" : id.charAt(0).toUpperCase() + id.slice(1)}
                </Button>
              ))}
            </nav>

            {/* Auth & Theme Toggle & Burger */}
            <div className="flex items-center gap-3">
              {user ? (
                <Button variant="hero" size="sm" asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <Button variant="hero" size="sm" asChild>
                  <Link to="/auth">Masuk / Daftar</Link>
                </Button>
              )}

              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="h-9 w-9">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Ubah Tema</span>
              </Button>

              <button className="md:hidden p-2 rounded-lg border border-border" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg md:hidden">
          <nav className="flex justify-around p-4">
            {sections.map((id) => (
              <Button key={id} variant="nav" size="sm" onClick={() => handleNavClick(id)} className={activeSection === id ? "text-orange font-bold" : "text-foreground"} aria-current={activeSection === id ? "page" : undefined}>
                {id === "budaya_tradisi" ? "Budaya" : id === "eco-batik" ? "Eco-Batik" : id.charAt(0).toUpperCase() + id.slice(1)}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
