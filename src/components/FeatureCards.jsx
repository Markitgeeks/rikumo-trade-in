import { motion } from "framer-motion";

const cards = [
  {
    label: "Give the gift of Rikumo",
    title: "Gift Cards",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=600&fit=crop&q=80",
    href: "https://rikumo.com/products/gift-card",
  },
  {
    label: "Earn points and exclusive access",
    title: "Rewards",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=600&fit=crop&q=80",
    href: "https://rikumo.com/pages/rewards",
  },
  {
    label: "Favorites from our community",
    title: "Influencer Picks",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=600&fit=crop&q=80",
    href: "https://rikumo.com/collections/influencer-picks",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1300px] mx-auto px-[30px] py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden block no-underline"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/70 text-[12px] tracking-wide mb-1">
                  {card.label}
                </p>
                <p className="text-white text-[22px] font-serif" style={{ fontWeight: 400 }}>
                  {card.title}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
