import { motion } from "framer-motion";

const articles = [
  {
    date: "12/30/25",
    title: "Honoring Craft and Tradition: A Japanese Woodworking Artist Talk with Imoshen Studio",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=500&h=400&fit=crop&q=80",
    href: "https://rikumo.com/blogs/journal",
  },
  {
    date: "1/23/26",
    title: "Ceremonial vs. Culinary Matcha: When to Use Each Grade",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop&q=80",
    href: "https://rikumo.com/blogs/journal",
  },
  {
    date: "5/8/21",
    title: "To All The Ladies: Celebrating The Women That Power Rikumo",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop&q=80",
    href: "https://rikumo.com/blogs/journal",
  },
];

export default function Journal() {
  return (
    <section className="bg-cream">
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
            The Journal
          </h2>
          <a
            href="https://rikumo.com/blogs/journal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-500 text-[13px] no-underline hover:text-warm-700 transition-colors underline underline-offset-4 decoration-warm-300"
          >
            Read All
          </a>
        </motion.div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group block no-underline"
            >
              <div className="aspect-[5/3] overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <p className="text-warm-400 text-[12px] mb-2">{article.date}</p>
              <h3
                className="font-serif text-[16px] md:text-[18px] text-warm-700 leading-[1.4] group-hover:underline group-hover:underline-offset-2 group-hover:decoration-warm-300"
                style={{ fontWeight: 400 }}
              >
                {article.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
