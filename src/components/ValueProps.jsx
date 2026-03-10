import { motion } from "framer-motion";

const props = [
  {
    title: "Curated With Intention",
    text: "Every object is selected for its ability to bring calm and purpose to daily rituals.",
  },
  {
    title: "Direct from Artisans",
    text: "We partner directly with Japanese makers to preserve traditional craftsmanship.",
  },
  {
    title: "Thoughtful Materials",
    text: "Sustainable, natural materials designed to age beautifully over time.",
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
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
