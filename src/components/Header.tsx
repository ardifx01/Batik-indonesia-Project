import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground">
              EduNation<span className="text-orange">.</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="nav" size="sm">Home</Button>
            <Button variant="nav" size="sm">Programs</Button>
            <Button variant="nav" size="sm">Courses</Button>
            <Button variant="nav" size="sm">Blog</Button>
          </nav>

          {/* Sign Up Button */}
          <div className="flex items-center">
            <Button variant="hero" size="default">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;