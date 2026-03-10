import { motion } from "framer-motion";
import { ShoppingBag, Palette, Building2, ArrowRight } from "lucide-react";

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
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=400&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=80",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
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
          <h3 className="font-serif text-3xl md:text-5xl font-light text-warm-900 mb-4">
            Three Ways to Shop
          </h3>
          <p className="text-warm-500 text-sm max-w-lg mx-auto">
            Whether you're furnishing your home, specifying for clients, or stocking your shelves — we have a program tailored for you.
          </p>
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
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group relative bg-white rounded-sm overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                  path.featured
                    ? "border-sage-300 shadow-lg ring-1 ring-sage-200"
                    : "border-warm-200 hover:border-warm-300"
                }`}
              >
                {path.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-sage-500 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                    Recommended
                  </div>
                )}

                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm ${
                        path.featured
                          ? "bg-sage-500/90 text-white"
                          : "bg-white/90 text-warm-700"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <p className="text-xs tracking-[0.2em] uppercase text-warm-400 mb-2">
                    {path.label}
                  </p>

                  <h4 className="font-serif text-xl font-medium text-warm-900 mb-3">
                    {path.title}
                  </h4>

                  <p className="text-warm-500 text-sm leading-relaxed mb-6 flex-1">
                    {path.description}
                  </p>

                  {path.label === "Designer Trade" ? (
                    <button
                      onClick={onApplyClick}
                      className="w-full py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer border-0 bg-sage-500 text-white hover:bg-sage-600 flex items-center justify-center gap-2 group/btn"
                    >
                      {path.cta}
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  ) : (
                    <a
                      href={path.href}
                      target={path.external ? "_blank" : undefined}
                      rel={path.external ? "noopener noreferrer" : undefined}
                      className={`flex items-center justify-center gap-2 w-full py-3 text-sm tracking-widest uppercase font-medium text-center transition-all duration-300 no-underline group/btn ${
                        path.label === "Wholesale"
                          ? "bg-warm-200 text-warm-700 hover:bg-warm-300"
                          : "bg-warm-900 text-white hover:bg-warm-800"
                      }`}
                    >
                      {path.cta}
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
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
