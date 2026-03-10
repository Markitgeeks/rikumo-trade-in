import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ThreePaths({ onApplyClick }) {
  return (
    <section id="programs" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-warm-400" />
            <span className="text-warm-400 text-[11px] tracking-[0.35em] uppercase">
              Choose Your Path
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-900 leading-tight">
              Three ways
              <br />
              to work with us
            </h2>
            <p className="text-warm-500 text-sm leading-relaxed max-w-sm">
              Whether you're furnishing your home, specifying for clients, or
              stocking your shelves — there's a path for you.
            </p>
          </div>
        </motion.div>

        {/* Cards — asymmetric layout */}
        <div className="grid md:grid-cols-12 gap-4 lg:gap-5">
          {/* Retail — Compact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 group"
          >
            <div className="relative h-full bg-white overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop&q=80"
                  alt="Rikumo retail collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-[11px] tracking-[0.25em] uppercase text-warm-400 mb-3">
                  Retail
                </p>
                <h3 className="font-serif text-2xl text-warm-900 mb-3">
                  Shop Rikumo
                </h3>
                <p className="text-warm-500 text-sm leading-relaxed mb-6">
                  Full retail collection of Japanese-inspired home goods,
                  ceramics, and textiles.
                </p>
                <a
                  href="https://rikumo.com/collections/yuka-picks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] tracking-[0.05em] text-warm-900 no-underline font-medium group/link"
                >
                  Continue Shopping
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Designer Trade — Featured, larger */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 group"
          >
            <div className="relative h-full bg-warm-900 text-white overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=600&fit=crop&q=80"
                  alt="Interior design project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="inline-block bg-sage-500 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 mb-4">
                  Recommended for Designers
                </div>
                <h3 className="font-serif text-3xl text-white mb-3">
                  Designer Trade Program
                </h3>
                <p className="text-warm-300 text-sm leading-relaxed mb-3">
                  Interior designers, architects, and studios receive 15% off
                  eligible products. Dedicated support for your projects.
                </p>
                <ul className="text-warm-400 text-xs space-y-1.5 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-sage-400 rounded-full" />
                    15% off eligible products
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-sage-400 rounded-full" />
                    Dedicated trade support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-sage-400 rounded-full" />
                    Free shipping on orders $250+
                  </li>
                </ul>
                <button
                  onClick={onApplyClick}
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-warm-900 text-[13px] tracking-[0.08em] font-medium hover:bg-sage-500 hover:text-white transition-all duration-300 cursor-pointer border-0"
                >
                  Apply Now
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Wholesale — Compact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 group"
          >
            <div className="relative h-full bg-warm-100 overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop&q=80"
                  alt="Wholesale products"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-[11px] tracking-[0.25em] uppercase text-warm-400 mb-3">
                  Wholesale
                </p>
                <h3 className="font-serif text-2xl text-warm-900 mb-3">
                  Morihata B2B
                </h3>
                <p className="text-warm-500 text-sm leading-relaxed mb-6">
                  Volume pricing, NET terms, and dedicated account management
                  for retailers.
                </p>
                <a
                  href="https://morihata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] tracking-[0.05em] text-warm-900 no-underline font-medium group/link"
                >
                  Visit Morihata
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
