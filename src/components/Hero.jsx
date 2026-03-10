import { motion } from "framer-motion";

export default function Hero({ onApplyClick }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background video/image — full width, taller */}
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
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content — left aligned like Framer */}
      <div className="relative max-w-[1300px] mx-auto px-[30px] py-28 md:py-40 lg:py-48">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-[36px] md:text-[48px] lg:text-[56px] leading-[1.15] text-white mb-4 max-w-lg"
          style={{ fontWeight: 400, fontStyle: "italic" }}
        >
          Objects For Intentional Living.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/70 text-[14px] md:text-[15px] leading-[1.5] max-w-md mb-8"
          style={{ fontWeight: 400 }}
        >
          Curated Japanese Design For The Modern Home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={onApplyClick}
            className="px-6 py-3 bg-transparent text-white text-[13px] tracking-wide cursor-pointer transition-colors hover:bg-white hover:text-warm-700"
            style={{ border: "1px solid rgba(255,255,255,0.8)" }}
          >
            Explore Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}
