import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, User, LogOut, ShoppingCart } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Logo from "@/assets/logo_B_nobg.png";
import { useAuth } from "@/hooks/useAuth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { supabase } from "@/integrations/supabase/client";

const sections = ["beranda", "sejarah", "galeri", "budaya_tradisi", "eco-batik"] as const;
type Section = (typeof sections)[number];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("beranda");
  const [userProfile, setUserProfile] = useState<{ username: string } | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  // Reset scroll & set active berdasarkan URL saat ini
  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.pathname === "/") {
      setActiveSection("beranda");
      return;
    }

    // Ambil segmen pertama setelah "/"
    const slug = (location.pathname.split("/")[1] || "beranda") as Section;

    if (sections.includes(slug)) {
      setActiveSection(slug);
    } else {
      setActiveSection("beranda");
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
      navigate(id === "beranda" ? "/" : `/${id}`);
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
    ["beranda", "sejarah", "galeri", "budaya_tradisi", "eco-batik"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      ["beranda", "sejarah", "galeri", "budaya_tradisi", "eco-batik"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [location.pathname]);

  // Fetch user profile
  useEffect(() => {
    if (user) {
      fetchUserProfile();
    } else {
      setUserProfile(null);
    }
  }, [user]);

  const fetchUserProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase.from("profiles").select("username").eq("user_id", user.id).single();

      if (!error && data) {
        setUserProfile(data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

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

            <div className="flex items-center gap-3">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outlinorange" size="sm" className="hidden md:flex">
                      {userProfile?.username || "User"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => navigate("/profile")}>
                      <User className="mr-2 h-4 w-4" />
                      Profil
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/cart")}>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Cart
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Keluar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button className="hidden md:flex md:text-center" variant="outlinorange" size="sm" asChild>
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
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setIsOpen(false)}>
          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-64 bg-background shadow-lg p-6 flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button className="self-end p-2 rounded-lg border border-border" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>

            {/* Navigation */}
            <nav className="flex flex-col gap-4 mt-4">
              {sections.map((id) => (
                <Button
                  key={id}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    handleNavClick(id);
                    setIsOpen(false);
                  }}
                  className={`justify-start ${activeSection === id ? "text-orange font-bold" : "text-foreground"}`}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {id === "budaya_tradisi" ? "Budaya & Tradisi" : id === "eco-batik" ? "Eco-Batik" : id.charAt(0).toUpperCase() + id.slice(1)}
                </Button>
              ))}
            </nav>

            {/* Auth Button */}
            <div className="mt-auto space-y-2">
              {user ? (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      navigate("/profile");
                      setIsOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profil
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Keluar
                  </Button>
                </>
              ) : (
                <Button variant="hero" size="sm" asChild className="w-full">
                  <Link to="/auth">Masuk / Daftar</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
