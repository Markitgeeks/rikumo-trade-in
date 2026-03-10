import { motion } from "framer-motion";
import { ShoppingBag, Palette, Building2 } from "lucide-react";

const paths = [
  {
    icon: ShoppingBag,
    label: "Retail",
    title: "Shop Rikumo",
    description:
      "Browse our curated collection of Japanese-inspired home goods, ceramics, textiles, and everyday objects. Full retail pricing with complimentary gift wrapping on orders over $100.",
    cta: "Continue Shopping",
    href: "https://rikumo.com/collections/yuka-picks",
    color: "warm",
    external: true,
  },
  {
    icon: Palette,
    label: "Designer Trade",
    title: "Designer Trade Program",
    description:
      "Interior designers, architects, and design studios receive 15% off eligible products after approval. Access exclusive trade pricing and dedicated support for your projects.",
    cta: "Apply Now",
    href: "#apply",
    color: "sage",
    featured: true,
  },
  {
    icon: Building2,
    label: "Wholesale",
    title: "Wholesale & Retail Partners",
    description:
      "For wholesale purchasing, retail partnerships, and volume orders, our sister brand Morihata handles all B2B relationships with dedicated account management.",
    cta: "Visit Morihata Wholesale",
    href: "https://morihata.com",
    color: "accent",
    external: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function ThreePaths({ onApplyClick }) {
  return (
    <section id="paths" className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-warm-500 text-xs tracking-[0.3em] uppercase mb-4">
            Choose Your Path
          </p>
          <h3 className="font-serif text-3xl md:text-5xl font-light text-warm-900">
            Three Ways to Shop
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className={`group relative bg-white rounded-sm border transition-all duration-300 hover:shadow-lg ${
                  path.featured
                    ? "border-sage-300 shadow-md ring-1 ring-sage-200"
                    : "border-warm-200 hover:border-warm-300"
                }`}
              >
                {path.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage-500 text-white text-[10px] tracking-[0.2em] uppercase px-4 py-1 rounded-full">
                    Recommended for Designers
                  </div>
                )}

                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                      path.featured
                        ? "bg-sage-100 text-sage-600"
                        : "bg-warm-100 text-warm-600"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <p className="text-xs tracking-[0.2em] uppercase text-warm-500 mb-2">
                    {path.label}
                  </p>

                  <h4 className="font-serif text-2xl font-medium text-warm-900 mb-4">
                    {path.title}
                  </h4>

                  <p className="text-warm-600 text-sm leading-relaxed mb-8 flex-1">
                    {path.description}
                  </p>

                  {path.label === "Designer Trade" ? (
                    <button
                      onClick={onApplyClick}
                      className={`w-full py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer border-0 ${
                        path.featured
                          ? "bg-sage-500 text-white hover:bg-sage-600"
                          : "bg-warm-900 text-white hover:bg-warm-800"
                      }`}
                    >
                      {path.cta}
                    </button>
                  ) : (
                    <a
                      href={path.href}
                      target={path.external ? "_blank" : undefined}
                      rel={path.external ? "noopener noreferrer" : undefined}
                      className={`block w-full py-3 text-sm tracking-widest uppercase font-medium text-center transition-all duration-300 no-underline ${
                        path.external
                          ? "bg-warm-200 text-warm-700 hover:bg-warm-300"
                          : "bg-warm-900 text-white hover:bg-warm-800"
                      }`}
                    >
                      {path.cta}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
