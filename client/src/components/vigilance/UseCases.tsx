import { motion } from "framer-motion";
import { Building2, Briefcase, Warehouse, ShoppingBag } from "lucide-react";

const cases = [
  {
    icon: Building2,
    title: "Smart Cities",
    desc: "Traffic management, public safety monitoring, and crowd control for modern urban environments."
  },
  {
    icon: Briefcase,
    title: "Corporate Offices",
    desc: "Secure access control, perimeter protection, and employee safety within office campuses."
  },
  {
    icon: Warehouse,
    title: "Factories & Warehouses",
    desc: "Automated safety checks, machinery monitoring, and theft prevention in industrial zones."
  },
  {
    icon: ShoppingBag,
    title: "Retail & Malls",
    desc: "Loss prevention, customer flow analysis, and heat mapping for retail intelligence."
  }
];

export default function UseCases() {
  return (
    <section id="solutions" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary font-tech uppercase tracking-widest text-sm">Industries</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2">
            Solutions for Every Sector
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 p-6 rounded-lg border border-white/5 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="shrink-0 w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all">
                <item.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-tech font-bold text-white mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Social Proof Placeholder */}
        <div className="mt-24 pt-12 border-t border-white/5 text-center">
          <p className="text-sm font-tech uppercase tracking-widest text-muted-foreground mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Geometric Placeholders for Logos */}
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="h-8 w-32 bg-white/20 rounded animate-pulse" />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
