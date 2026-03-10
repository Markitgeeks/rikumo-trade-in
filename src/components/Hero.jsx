import { motion } from "framer-motion";

export default function Hero({ onApplyClick }) {
  return (
    <section className="border-b border-border">
      <div className="max-w-[1300px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left — Text */}
          <div className="py-16 md:py-24 pr-0 md:pr-16 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-warm-500 text-[13px] tracking-wide mb-6"
            >
              Trade & Professional Program
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-serif text-[42px] md:text-[56px] leading-[1.1] font-bold text-black mb-6"
            >
              Designed for
              <br />
              those who{" "}
              <em className="font-normal">design.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-warm-600 text-[16px] leading-[1.6] max-w-md mb-10"
            >
              Exclusive trade pricing for interior designers, architects, and
              design studios. Apply once, save 15% on every eligible order.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={onApplyClick}
                className="px-7 py-3.5 bg-black text-white text-[14px] hover:opacity-80 transition-opacity cursor-pointer border-0"
              >
                Apply for Trade
              </button>
              <a
                href="#programs"
                className="text-[14px] text-black underline underline-offset-4 decoration-warm-300 hover:decoration-black transition-colors"
              >
                Learn more
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-10 mt-14 pt-8 border-t border-border"
            >
              {[
                { value: "15%", label: "Trade Discount" },
                { value: "500+", label: "Design Partners" },
                { value: "2–3 days", label: "Approval Time" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[28px] font-bold text-black leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-warm-500 text-[12px]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 border-l border-border" />
            <img
              src="https://images.unsplash.com/photo-1545083036-b175dd155a1d?w=800&h=900&fit=crop&q=80"
              alt="Japanese ceramics collection"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
