import { motion } from "framer-motion";

export default function Hero({ onApplyClick }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background video/image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1545083036-b175dd155a1d?w=1600&h=900&fit=crop&q=80"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/36441c3d20e74aeca2bae40d13e01f64.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content overlay */}
      <div className="relative max-w-[1300px] mx-auto px-8 py-32 md:py-44 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/80 text-[13px] tracking-[0.2em] uppercase mb-5"
        >
          Trade & Professional Program
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold text-white mb-6 max-w-3xl"
        >
          Designed for those
          <br />
          who <em className="font-normal">design.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-lg mb-10"
        >
          Exclusive trade pricing for interior designers, architects, and
          design studios. Apply once, save on every eligible order.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-5"
        >
          <button
            onClick={onApplyClick}
            className="px-8 py-3.5 bg-white text-warm-700 text-[14px] tracking-wide hover:bg-cream transition-colors cursor-pointer border-0"
          >
            Apply for Trade
          </button>
          <a
            href="#programs"
            className="text-[14px] text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
          >
            Learn more
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative border-t border-white/15"
      >
        <div className="max-w-[1300px] mx-auto px-8 py-6 flex justify-center gap-12 md:gap-20">
          {[
            { value: "15%", label: "Trade Discount" },
            { value: "500+", label: "Design Partners" },
            { value: "2–3 days", label: "Approval Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-[24px] md:text-[28px] font-bold text-white leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-white/60 text-[11px] tracking-[0.1em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
