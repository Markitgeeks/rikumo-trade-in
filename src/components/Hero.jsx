import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545083036-b175dd155a1d?w=1920&q=80"
          alt="Japanese ceramics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/70 via-warm-900/50 to-warm-900/80" />
      </div>

      {/* Floating accent images */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute top-20 left-8 w-32 h-44 md:w-48 md:h-64 rounded-sm overflow-hidden shadow-2xl hidden lg:block"
      >
        <img
          src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=300&q=80"
          alt="Japanese pottery"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-28 right-8 w-36 h-48 md:w-52 md:h-72 rounded-sm overflow-hidden shadow-2xl hidden lg:block"
      >
        <img
          src="https://images.unsplash.com/photo-1528396518501-b53b428ed002?w=300&q=80"
          alt="Japanese textiles"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="w-px h-12 bg-warm-400/50 mx-auto mb-6" />
          <p className="text-warm-300/80 text-xs tracking-[0.4em] uppercase">
            Rikumo &middot; Est. Philadelphia
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 text-white"
        >
          Trade & Professional
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="italic text-warm-300"
          >
            Program
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-warm-300/90 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Curated Japanese-inspired home goods for designers, architects,
          and discerning retail customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#apply"
            className="px-10 py-3.5 bg-white text-warm-900 text-sm tracking-widest uppercase font-medium hover:bg-warm-100 transition-all duration-300 no-underline"
          >
            Apply for Trade
          </a>
          <a
            href="#paths"
            className="px-10 py-3.5 border border-warm-400/50 text-warm-200 text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 no-underline"
          >
            Explore Programs
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} className="text-warm-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
