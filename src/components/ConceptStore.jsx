import { motion } from "framer-motion";

export default function ConceptStore() {
  return (
    <section
      className="bg-white"
      style={{ borderTop: "1px solid rgba(32,32,32,0.1)", borderBottom: "1px solid rgba(32,32,32,0.1)" }}
    >
      <div className="max-w-[1300px] mx-auto px-[30px] py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=800&fit=crop&q=80"
                alt="The Concept Store"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-warm-400 text-[11px] tracking-[0.2em] uppercase mb-4">
              The Concept Store
            </p>
            <h2
              className="font-serif text-[28px] md:text-[34px] text-warm-700 leading-[1.2] mb-6"
              style={{ fontWeight: 400 }}
            >
              Experience Omotenashi
            </h2>
            <p className="text-warm-500 text-[14px] leading-[1.7] mb-4">
              Gentle music plays and soothing notes of hinoki suffuse the air as
              you explore artisanal wares at our concept store in Ardmore, PA.
              Stop by and savor a meditative shopping experience as you sip on
              organic tea or charcoal-purified water, or sign up for one of our
              regular in-person workshops.
            </p>
            <p className="text-warm-500 text-[14px] leading-[1.7] mb-8">
              Please enjoy the peaceful environment we've crafted for you in the
              spirit of omotenashi, the heart of Japanese hospitality.
            </p>
            <a
              href="https://rikumo.com/pages/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-warm-700 text-white text-[12px] tracking-wide no-underline hover:bg-warm-900 transition-colors rounded-full"
            >
              Find Us Here
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
