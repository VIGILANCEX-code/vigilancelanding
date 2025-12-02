import { Link } from "wouter";
import logo from "@assets/LOGO_1764638870459.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
             <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="VigilanceX" className="h-12 w-auto object-contain" />
              </div>
            <p className="text-muted-foreground text-sm">Relentless Vigilance for a Safer Tomorrow.</p>
          </div>

          <div className="flex gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Solutions</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VigilanceX. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
