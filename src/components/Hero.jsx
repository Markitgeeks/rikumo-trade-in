import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-900 text-white">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-warm-400 text-xs tracking-[0.3em] uppercase mb-6"
        >
          Rikumo &middot; Trade & Professional Program
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
        >
          Thoughtful Design,
          <br />
          <span className="italic text-warm-300">Tailored Access</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-warm-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Whether you're shopping for your home, designing for clients, or
          sourcing for your retail business — we have a path for you.
        </motion.p>

        <motion.a
          href="#paths"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block px-8 py-3 border border-warm-500 text-warm-300 text-sm tracking-widest uppercase hover:bg-white hover:text-warm-900 transition-all duration-300 no-underline"
        >
          Explore Programs
        </motion.a>
      </div>
    </section>
  );
}
