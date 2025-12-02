import { motion } from "framer-motion";
import { ShieldAlert, Activity, Factory, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: ShieldAlert,
    title: "Intelligent Threat Detection",
    desc: "Automatically identifies unauthorized access, weapons, and suspicious behaviors in real-time."
  },
  {
    icon: Activity,
    title: "Behavior & Anomaly Analysis",
    desc: "Detects unusual patterns like loitering, running, or crowd formation to predict incidents."
  },
  {
    icon: Factory,
    title: "Industrial Safety Monitoring",
    desc: "Ensures PPE compliance and detects hazardous situations in manufacturing environments."
  },
  {
    icon: LayoutDashboard,
    title: "Smart Alerts & Dashboards",
    desc: "Centralized command center with instant notifications and actionable insights."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Core Capabilities
          </h2>
          <p className="text-muted-foreground text-lg">
            Our AI engine processes video streams with superhuman attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-tech font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
