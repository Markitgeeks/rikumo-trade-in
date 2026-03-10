import { motion } from "framer-motion";
import { ExternalLink, Building2 } from "lucide-react";

export default function WholesaleBlock() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?w=1920&q=80"
          alt="Warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-warm-900/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/5 hidden md:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&h=600&fit=crop&q=80"
                alt="Wholesale products"
                className="w-full h-80 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-warm-800 text-warm-300 text-xs tracking-[0.2em] uppercase px-4 py-2">
                Morihata &middot; B2B
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-3/5 text-center md:text-left"
          >
            <div className="w-14 h-14 bg-warm-800 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Building2 size={24} className="text-warm-400" />
            </div>

            <p className="text-warm-500 text-xs tracking-[0.3em] uppercase mb-4">
              Wholesale & Retail Partners
            </p>

            <h3 className="font-serif text-2xl md:text-4xl font-light text-white mb-4">
              Looking for Wholesale Pricing?
            </h3>

            <p className="text-warm-400 text-sm md:text-base leading-relaxed max-w-xl mb-4">
              For wholesale purchasing and retail partner accounts, please
              continue to{" "}
              <strong className="text-warm-200">Morihata.com</strong> — our
              dedicated B2B platform with volume pricing, NET terms, and
              dedicated account management.
            </p>

            <ul className="text-warm-400/80 text-sm space-y-2 mb-8 text-left max-w-md mx-auto md:mx-0">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-warm-500 rounded-full" />
                Volume pricing & NET payment terms
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-warm-500 rounded-full" />
                Dedicated wholesale account manager
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-warm-500 rounded-full" />
                Full product catalog & linesheet access
              </li>
            </ul>

            <a
              href="https://morihata.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-warm-500 text-warm-200 text-sm tracking-widest uppercase hover:bg-white hover:text-warm-900 transition-all duration-300 no-underline"
            >
              Visit Morihata Wholesale
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
