import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Tag, Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Camphor Wood Aroma Diffuser",
    category: "Home",
    retail: 9.89,
    eligible: true,
    badge: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Sasawashi Room Shoes",
    category: "Home",
    retail: 74.70,
    eligible: true,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "OHTO Wooden 2.0 Mechanical Pencil",
    category: "Stationery",
    retail: 15.38,
    eligible: true,
    badge: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Wooden Animal — Shiba",
    category: "Home",
    retail: 18.67,
    eligible: false,
    image:
      "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Ceramic Lengua Spoon",
    category: "Kitchen",
    retail: 14.29,
    eligible: true,
    badge: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Washi Paper Incense — Hinoki",
    category: "Fragrance",
    retail: 28.00,
    eligible: true,
    image:
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Tochi Wood Serving Bowl",
    category: "Kitchen",
    retail: 120.00,
    eligible: true,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Linen Kaya Cloth — Set of 3",
    category: "Textiles",
    retail: 34.00,
    eligible: false,
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=500&h=600&fit=crop&q=80",
  },
];

function formatPrice(n) {
  return `$${n.toFixed(2)}`;
}

function tradePrice(n) {
  return n * 0.85;
}

function ProductCard({ product, isApproved, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />

        {/* ADD TO CART overlay on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className="absolute bottom-0 left-0 right-0 p-3"
            >
              <button className="w-full py-2.5 bg-white text-warm-700 text-[11px] tracking-[0.12em] uppercase flex items-center justify-center gap-2 cursor-pointer border-0 hover:bg-warm-700 hover:text-white transition-colors">
                <ShoppingCart size={12} />
                Add to Cart
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BEST SELLER badge */}
        {product.badge && !isApproved && (
          <div className="absolute top-3 left-3 bg-warm-700 text-white text-[9px] tracking-[0.15em] uppercase px-2.5 py-1">
            {product.badge}
          </div>
        )}
        {/* Trade badge */}
        {isApproved && product.eligible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-3 left-3 bg-sage-600 text-white text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 flex items-center gap-1"
          >
            <Tag size={9} />
            Trade
          </motion.div>
        )}
        {isApproved && !product.eligible && (
          <div className="absolute top-3 left-3 bg-warm-500 text-white text-[9px] tracking-[0.15em] uppercase px-2.5 py-1">
            Retail Only
          </div>
        )}
        {isApproved && product.eligible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-3 right-3 bg-white/90 text-sage-600 text-[9px] font-medium px-2.5 py-1"
          >
            Save {formatPrice(product.retail - tradePrice(product.retail))}
          </motion.div>
        )}
      </div>

      {/* Product info */}
      <h4 className="text-[13px] text-warm-700 mb-1.5 leading-snug" style={{ fontWeight: 400 }}>
        {product.name}
      </h4>

      <div className="flex items-baseline gap-2">
        {isApproved && product.eligible ? (
          <>
            <span className="text-sage-600 text-[14px]" style={{ fontWeight: 500 }}>
              {formatPrice(tradePrice(product.retail))}
            </span>
            <span className="text-warm-400 line-through text-[12px]">
              {formatPrice(product.retail)}
            </span>
          </>
        ) : (
          <span className="text-warm-700 text-[14px]">
            {formatPrice(product.retail)}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function ProductShowcase({ isApproved }) {
  return (
    <section id="collection" className="bg-cream">
      <div className="max-w-[1300px] mx-auto px-[30px] py-16 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <h2
            className="font-serif text-[24px] md:text-[28px] text-warm-700"
            style={{ fontWeight: 400 }}
          >
            {isApproved ? "Trade Collection" : "New Arrivals"}
          </h2>

          <div className="flex items-center gap-3">
            {isApproved && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-1.5 text-sage-600 text-[12px]"
              >
                <ShieldCheck size={14} />
                Trade pricing active
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Grid — 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8 md:gap-y-10">
          {products.map((product, i) => (
            <ProductCard
              key={product.name}
              product={product}
              isApproved={isApproved}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
