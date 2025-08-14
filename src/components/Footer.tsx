import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              EduNation<span className="text-orange">.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering quality education across Indonesia through innovative programs and accessible learning solutions.
            </p>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-orange transition-colors">Our Mission</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-orange transition-colors group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-purple transition-colors group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-turquoise transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-pink transition-colors group">
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EduNation. All rights reserved. Building a brighter future through education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;