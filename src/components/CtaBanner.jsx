import { motion } from "framer-motion";

export default function CtaBanner({ onApplyClick }) {
  return (
    <section className="border-b border-border bg-cream-dark">
      <div className="max-w-[1300px] mx-auto px-8 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-warm-500 text-[13px] tracking-wide mb-3">
              Ready?
            </p>
            <h2 className="font-serif text-[36px] md:text-[44px] font-bold text-warm-900 leading-[1.1] mb-4">
              Apply for designer
              <br />
              <em className="font-normal">trade pricing</em>
            </h2>
            <p className="text-warm-600 text-[15px] leading-[1.6] max-w-sm">
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
              className="px-8 py-3.5 bg-warm-900 text-white text-[14px] hover:bg-warm-800 transition-colors cursor-pointer border-0 mb-3"
            >
              Start Your Application
            </button>
            <p className="text-warm-400 text-[12px]">
              Takes under 3 minutes &middot; Reviewed in 2–3 business days
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
