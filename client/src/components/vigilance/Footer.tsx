import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
             <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rotate-45" />
                </div>
                <span className="text-xl font-heading font-bold text-white">
                  VIGILANCE<span className="text-primary">X</span>
                </span>
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
