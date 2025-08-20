import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              BatiX<span className="text-orange">.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Menjelajahi keindahan motif, filosofi, dan makna di balik setiap helai kain batik Indonesia.</p>
          </div>

          {/* Google Map */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Lokasi Kami</h4>
            <div className="w-full h-48 md:h-64 lg:h-72 overflow-hidden rounded-xl shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.270804473989!2d109.24651767430049!3d-7.4352577732526255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655ea49d9f9885%3A0x62be0b6159700ec9!2sTelkom%20Institute%20of%20Technology%20Purwokerto!5e0!3m2!1sen!2sid!4v1755666567317!5m2!1sen!2sid"
                className="w-full h-full border-0 rounded-xl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Sosial Media</h4>
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
          <p className="text-muted-foreground text-sm">© 2025 BatiX. Dibuat dengan kesadaran penuh untuk lomba IITC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
