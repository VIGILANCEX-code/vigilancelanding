import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const values = [
    { title: "Real-time Monitoring", desc: "Instant analysis of video feeds with sub-second latency." },
    { title: "High Accuracy", desc: "99.9% detection rate powered by advanced neural networks." },
    { title: "Privacy-First", desc: "GDPR compliant processing with auto-anonymization features." },
    { title: "Enterprise Scale", desc: "Deploy across thousands of cameras with centralized management." }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Defining the Future of <span className="text-primary">Security</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              At VigilanceX, we don't just record footage; we understand it. Our mission is to transform passive surveillance into active intelligence, empowering organizations to prevent incidents before they happen.
            </p>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              By combining cutting-edge computer vision with robust privacy controls, we provide a safety layer that never sleeps, ensuring peace of mind for smart cities, offices, and industrial facilities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-tech font-semibold uppercase tracking-wider">{value.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-card to-background border border-white/10 p-1 relative overflow-hidden group">
               {/* Abstract Visual Representation of AI Analysis */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
               <div className="absolute inset-0 grid-bg opacity-30" />
               
               <div className="h-full w-full flex items-center justify-center relative z-10">
                 <div className="w-2/3 h-2/3 border border-primary/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                    <div className="w-2 h-2 bg-primary rounded-full absolute top-0 left-1/2 -translate-x-1/2 box-glow" />
                 </div>
                 <div className="absolute w-1/2 h-1/2 border border-emerald-500/30 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 box-glow" />
                 </div>
                 <div className="absolute w-24 h-24 bg-primary/10 backdrop-blur-xl rounded-lg border border-primary/40 flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-white tracking-tighter">VX</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
