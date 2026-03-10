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
      <div className="max-w-[1300px] mx-auto px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-warm-500 text-[12px] tracking-[0.15em] uppercase mb-3">
              Choose Your Path
            </p>
            <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-warm-700 leading-[1.1]">
              Three ways to
              <br />
              work with us
            </h2>
          </div>
          <p className="text-warm-500 text-[15px] leading-[1.6] max-w-sm">
            Whether you're furnishing your home, specifying for clients, or
            stocking your shelves.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {paths.map((path, i) => (
            <motion.div
              key={path.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white group rounded-[5px] overflow-hidden"
              style={{ border: "1px solid rgba(32,32,32,0.1)" }}
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-warm-400 text-[11px] tracking-[0.15em] uppercase mb-3">
                  {path.label}
                </p>
                <h3 className="font-serif text-[22px] font-bold text-warm-700 mb-3">
                  {path.title}
                </h3>
                <p className="text-warm-500 text-[14px] leading-[1.6] mb-6">
                  {path.description}
                </p>

                {path.label === "Designer Trade" ? (
                  <button
                    onClick={onApplyClick}
                    className="px-6 py-3 bg-warm-700 text-white text-[13px] tracking-wide hover:bg-warm-900 transition-colors cursor-pointer border-0 rounded-[5px] flex items-center gap-1.5"
                  >
                    {path.cta}
                    <ArrowUpRight size={13} />
                  </button>
                ) : (
                  <a
                    href={path.href}
                    target={path.external ? "_blank" : undefined}
                    rel={path.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-[14px] text-warm-700 underline underline-offset-4 decoration-warm-300 hover:decoration-warm-700 transition-colors"
                  >
                    {path.cta}
                    <ArrowUpRight size={13} />
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
