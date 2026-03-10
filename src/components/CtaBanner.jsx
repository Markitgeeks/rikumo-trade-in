import { motion } from "framer-motion";

export default function CtaBanner({ onApplyClick }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(32,32,32,0.1)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545083036-b175dd155a1d?w=1400&h=600&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-[30px] py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/50 text-[11px] tracking-[0.15em] uppercase mb-3">
              Ready?
            </p>
            <h2
              className="font-serif text-[28px] md:text-[34px] text-white leading-[1.2] mb-4"
              style={{ fontWeight: 400 }}
            >
              Apply for designer
              <br />
              <em>trade pricing</em>
            </h2>
            <p className="text-white/60 text-[14px] leading-[1.6] max-w-sm">
              Join 500+ design professionals who source from Rikumo. Free to
              apply, no commitment required.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:text-right"
          >
            <button
              onClick={onApplyClick}
              className="px-7 py-3 bg-white text-warm-700 text-[13px] tracking-wide hover:bg-cream transition-colors cursor-pointer border-0 mb-3"
            >
              Start Your Application
            </button>
            <p className="text-white/40 text-[12px] tracking-wide">
              Takes under 3 minutes &middot; Reviewed in 2–3 business days
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
