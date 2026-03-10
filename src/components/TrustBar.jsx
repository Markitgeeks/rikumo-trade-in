import { motion } from "framer-motion";
import { Truck, ShieldCheck, Clock, Award } from "lucide-react";

const signals = [
  { icon: ShieldCheck, text: "500+ Approved Trade Partners" },
  { icon: Award, text: "15% Off Eligible Products" },
  { icon: Clock, text: "2-3 Day Approval" },
  { icon: Truck, text: "Free Shipping on Trade Orders $250+" },
];

export default function TrustBar() {
  return (
    <section className="bg-warm-900 py-4 border-b border-warm-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {signals.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-warm-400 text-xs tracking-wide"
              >
                <Icon size={14} className="text-sage-400" />
                <span>{s.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
