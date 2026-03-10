import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Designer Trade program transformed how we source for our residential projects. The 15% savings on Rikumo's collection has become a meaningful part of our design budget.",
    name: "Sarah Nakamura",
    title: "Principal, Nakamura Interiors",
    location: "Brooklyn, NY",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
  },
  {
    quote:
      "We specify Rikumo products for nearly every hospitality project. The quality is exceptional and the trade pricing makes it viable at scale. Their support team understands design.",
    name: "David Chen",
    title: "Design Director, Studio Maru",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
  },
  {
    quote:
      "From application to approval, the process was seamless. Now I can offer my clients beautiful Japanese home goods at a price point that works for every project tier.",
    name: "Emily Park",
    title: "Founder, Park & Oak Design",
    location: "Philadelphia, PA",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  function next() {
    setActive((a) => (a + 1) % testimonials.length);
  }
  function prev() {
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  }

  const t = testimonials[active];

  return (
    <section className="py-20 md:py-28 bg-sage-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-warm-500 text-xs tracking-[0.3em] uppercase mb-4">
            From Our Trade Partners
          </p>
          <h3 className="font-serif text-3xl md:text-4xl font-light text-warm-900">
            Trusted by Designers
          </h3>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 md:p-14 text-center shadow-sm border border-sage-100"
            >
              <Quote size={32} className="text-sage-300 mx-auto mb-6" />

              <p className="font-serif text-lg md:text-xl text-warm-800 leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>

              <div className="flex flex-col items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-sage-200"
                />
                <div>
                  <p className="text-warm-900 font-medium text-sm">
                    {t.name}
                  </p>
                  <p className="text-warm-500 text-xs">{t.title}</p>
                  <p className="text-warm-400 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-warm-300 flex items-center justify-center text-warm-500 hover:bg-warm-900 hover:text-white hover:border-warm-900 transition-all cursor-pointer bg-transparent"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer border-0 ${
                    i === active
                      ? "bg-sage-500 w-6"
                      : "bg-warm-300 w-2 hover:bg-warm-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-warm-300 flex items-center justify-center text-warm-500 hover:bg-warm-900 hover:text-white hover:border-warm-900 transition-all cursor-pointer bg-transparent"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
