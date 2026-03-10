import { motion } from "framer-motion";
import { ExternalLink, Building2 } from "lucide-react";

export default function WholesaleBlock() {
  return (
    <section className="py-16 md:py-20 bg-warm-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-14 h-14 bg-warm-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 size={24} className="text-warm-400" />
          </div>

          <p className="text-warm-500 text-xs tracking-[0.3em] uppercase mb-4">
            Wholesale & Retail Partners
          </p>

          <h3 className="font-serif text-2xl md:text-4xl font-light mb-4">
            Looking for Wholesale Pricing?
          </h3>

          <p className="text-warm-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8">
            For wholesale purchasing and retail partner accounts, please
            continue to{" "}
            <strong className="text-warm-300">Morihata.com</strong> — our
            dedicated B2B platform with volume pricing, NET terms, and
            dedicated account management.
          </p>

          <a
            href="https://morihata.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-warm-600 text-warm-300 text-sm tracking-widest uppercase hover:bg-white hover:text-warm-900 transition-all duration-300 no-underline"
          >
            Visit Morihata Wholesale
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
