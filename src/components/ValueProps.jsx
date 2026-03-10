import { motion } from "framer-motion";
import { Percent, Clock, Headphones } from "lucide-react";

const props = [
  {
    icon: Percent,
    title: "15% Trade Discount",
    text: "Exclusive pricing on eligible products for approved designers and studios.",
  },
  {
    icon: Clock,
    title: "Fast Approval",
    text: "Apply in under 3 minutes. We review and respond within 2–3 business days.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    text: "A dedicated account manager to help with sourcing, orders, and project specs.",
  },
];

export default function ValueProps() {
  return (
    <section
      className="bg-cream"
      style={{ borderTop: "1px solid rgba(32,32,32,0.1)", borderBottom: "1px solid rgba(32,32,32,0.1)" }}
    >
      <div className="max-w-[1300px] mx-auto px-[30px] py-14 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {props.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <Icon size={20} className="text-warm-400 mx-auto mb-3" strokeWidth={1.5} />
                <h3
                  className="font-serif text-[18px] text-warm-700 mb-2"
                  style={{ fontWeight: 400 }}
                >
                  {prop.title}
                </h3>
                <p className="text-warm-500 text-[13px] leading-[1.6] max-w-xs mx-auto">
                  {prop.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
