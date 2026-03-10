import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    label: "Japanese Towels",
    cta: "Explore Now",
    href: "https://rikumo.com/collections/yuka-picks",
    external: true,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80",
  },
  {
    label: "Morihata Organic Tea",
    cta: "Explore Now",
    href: "https://rikumo.com/collections/tea",
    external: true,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=400&fit=crop&q=80",
  },
  {
    label: "Japanese Skincare",
    cta: "Explore Now",
    href: "https://rikumo.com/collections/skincare",
    external: true,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=80",
  },
];

export default function ThreePaths({ onApplyClick }) {
  return (
    <section id="programs" className="bg-cream">
      <div className="max-w-[1300px] mx-auto px-[30px] py-16 md:py-20">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <h2
            className="font-serif text-[24px] md:text-[28px] text-warm-700"
            style={{ fontWeight: 400 }}
          >
            Shop By Collection
          </h2>
          <a
            href="https://rikumo.com/collections"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-warm-700 text-white text-[12px] tracking-wide no-underline rounded-full hover:bg-warm-900 transition-colors"
          >
            View All
          </a>
        </motion.div>

        {/* Collection cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {collections.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden block no-underline"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="text-white text-[18px] md:text-[20px] font-serif mb-1" style={{ fontWeight: 400 }}>
                  {item.label}
                </p>
                <span className="text-white/70 text-[12px] tracking-wide flex items-center gap-1">
                  {item.cta}
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
