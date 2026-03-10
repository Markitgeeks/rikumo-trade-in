import { motion } from "framer-motion";

export default function WholesaleBlock() {
  return (
    <section
      className="bg-cream"
      style={{ borderTop: "1px solid rgba(32,32,32,0.1)" }}
    >
      <div className="max-w-[1300px] mx-auto px-[30px] py-16 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-serif text-[26px] md:text-[32px] text-warm-700 mb-3"
            style={{ fontWeight: 400 }}
          >
            Wholesale Partnerships
          </h2>
          <p className="text-warm-500 text-[14px] leading-[1.6] max-w-md mx-auto mb-8">
            Bring the spirit of Japanese craftsmanship to your store.
          </p>
          <a
            href="https://morihata.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 bg-warm-700 text-white text-[12px] tracking-wide no-underline hover:bg-warm-900 transition-colors rounded-full"
          >
            Apply As A Retailer
          </a>
        </motion.div>
      </div>
    </section>
  );
}
