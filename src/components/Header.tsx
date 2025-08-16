import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground">
              BatiX<span className="text-orange">.</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="nav" size="sm">
              Home
            </Button>
            <Button variant="nav" size="sm">
              Sejarah
            </Button>
            <Button variant="nav" size="sm">
              Jenis
            </Button>
            <Button variant="nav" size="sm">
              Rawr
            </Button>
          </nav>

          {/* Theme Toggle and Daftar Sekarang Button */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="hero" size="default">
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
