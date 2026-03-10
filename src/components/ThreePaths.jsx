import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const paths = [
  {
    label: "Retail",
    title: "Shop Rikumo",
    description:
      "Browse our curated collection of Japanese-inspired home goods, ceramics, textiles, and everyday objects.",
    cta: "Continue Shopping",
    href: "https://rikumo.com/collections/yuka-picks",
    external: true,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop&q=80",
  },
  {
    label: "Designer Trade",
    title: "Designer Trade Program",
    description:
      "Interior designers and studios receive 15% off eligible products after approval. Dedicated support for your projects.",
    cta: "Apply Now",
    href: "#apply",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=500&fit=crop&q=80",
  },
  {
    label: "Wholesale",
    title: "Morihata Wholesale",
    description:
      "Volume pricing, NET terms, and dedicated account management for retailers and retail partners.",
    cta: "Visit Morihata",
    href: "https://morihata.com",
    external: true,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop&q=80",
  },
];

export default function ThreePaths({ onApplyClick }) {
  return (
    <section id="programs" className="bg-cream">
      <div className="max-w-[1300px] mx-auto px-[30px] py-16 md:py-20">
        {/* Header row — Framer style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-warm-400 text-[11px] tracking-[0.15em] uppercase mb-3">
              Choose Your Path
            </p>
            <h2
              className="font-serif text-[24px] md:text-[28px] text-warm-700"
              style={{ fontWeight: 400 }}
            >
              Three ways to work with us
            </h2>
          </div>
          <p className="text-warm-500 text-[13px] leading-[1.6] max-w-xs hidden md:block">
            Whether you're furnishing your home, specifying for clients, or
            stocking your shelves.
          </p>
        </motion.div>

        {/* Cards — image overlay style like Framer collection cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {paths.map((path, i) => (
            <motion.div
              key={path.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={path.image}
                alt={path.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="text-white/60 text-[11px] tracking-[0.15em] uppercase mb-2">
                  {path.label}
                </p>
                <p
                  className="text-white text-[20px] font-serif mb-1"
                  style={{ fontWeight: 400 }}
                >
                  {path.title}
                </p>
                <p className="text-white/60 text-[12px] leading-[1.5] mb-4 max-w-xs">
                  {path.description}
                </p>

                {path.label === "Designer Trade" ? (
                  <button
                    onClick={onApplyClick}
                    className="px-5 py-2 bg-white text-warm-700 text-[12px] tracking-wide cursor-pointer border-0 hover:bg-cream transition-colors flex items-center gap-1.5"
                  >
                    {path.cta}
                    <ArrowUpRight size={12} />
                  </button>
                ) : (
                  <a
                    href={path.href}
                    target={path.external ? "_blank" : undefined}
                    rel={path.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-[12px] text-white/80 underline underline-offset-4 decoration-white/30 hover:decoration-white hover:text-white transition-colors"
                  >
                    {path.cta}
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
