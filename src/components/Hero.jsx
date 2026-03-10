import { motion } from "framer-motion";

export default function Hero({ onApplyClick }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545083036-b175dd155a1d?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-warm-400" />
              <span className="text-warm-400 text-[11px] tracking-[0.35em] uppercase">
                Trade & Professional
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] text-white mb-8 text-balance"
          >
            Designed for
            <br />
            those who
            <br />
            <em className="text-warm-300 not-italic font-serif">design.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-warm-300/90 text-base md:text-lg leading-relaxed max-w-md mb-12"
          >
            Exclusive trade pricing for interior designers, architects, and
            design studios. Apply once, save 15% on every eligible order.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <button
              onClick={onApplyClick}
              className="group px-8 py-4 bg-white text-warm-900 text-[13px] tracking-[0.12em] uppercase font-medium hover:bg-sage-500 hover:text-white transition-all duration-400 cursor-pointer border-0"
            >
              Apply for Trade Access
            </button>
            <a
              href="#programs"
              className="px-8 py-4 text-[13px] tracking-[0.12em] uppercase text-warm-300 hover:text-white transition-colors duration-300 no-underline"
            >
              Learn More
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-10 md:gap-14 mt-20 pt-8 border-t border-white/10"
          >
            {[
              { value: "15%", label: "Trade Discount" },
              { value: "500+", label: "Design Partners" },
              { value: "2-3", label: "Days to Approve" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl md:text-3xl text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-warm-500 text-[11px] tracking-[0.1em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Side image accent */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute right-0 top-0 bottom-0 w-[35%] hidden xl:block"
      >
        <img
          src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
          alt=""
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
      </motion.div>
    </section>
  );
}
