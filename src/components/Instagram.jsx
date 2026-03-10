import { motion } from "framer-motion";

const posts = [
  "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=300&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=300&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=300&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=300&h=300&fit=crop&q=80",
];

export default function Instagram() {
  return (
    <section
      className="bg-cream"
      style={{ borderTop: "1px solid rgba(32,32,32,0.1)" }}
    >
      <div className="max-w-[1300px] mx-auto px-[30px] py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-warm-700 text-[14px] mb-1" style={{ fontWeight: 500 }}>
            @rikumo
          </p>
          <p className="text-warm-500 text-[13px]">
            Shop the looks you love, straight from Instagram.
          </p>
        </motion.div>

        <div className="grid grid-cols-5 gap-3">
          {posts.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/rikumo"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square overflow-hidden group"
            >
              <img
                src={src}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
