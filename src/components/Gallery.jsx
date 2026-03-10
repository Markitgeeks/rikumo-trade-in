import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400&h=300&fit=crop&q=80",
];

export default function Gallery() {
  return (
    <section className="py-16 bg-warm-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-warm-400 text-xs tracking-[0.3em] uppercase">
          @rikumo &middot; Design in Everyday Life
        </p>
      </motion.div>

      <div className="flex gap-3 md:gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex-1 min-w-0 group"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={src}
                alt={`Rikumo lifestyle ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
