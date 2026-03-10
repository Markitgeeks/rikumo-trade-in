import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Designer Trade program transformed how we source for our residential projects. The savings on Rikumo's collection have become a meaningful part of our design budget.",
    name: "Sarah Nakamura",
    title: "Principal, Nakamura Interiors",
    location: "Brooklyn, NY",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
  },
  {
    quote:
      "We specify Rikumo products for nearly every hospitality project. The quality is exceptional and the trade pricing makes it viable at scale.",
    name: "David Chen",
    title: "Design Director, Studio Maru",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
  },
  {
    quote:
      "From application to approval, the process was seamless. Now I can offer my clients beautiful Japanese home goods at a price point that works for every project.",
    name: "Emily Park",
    title: "Founder, Park & Oak Design",
    location: "Philadelphia, PA",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="bg-cream-dark">
      <div className="max-w-[1300px] mx-auto px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left — image + info */}
          <div className="md:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[5px] mb-8">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-warm-700 text-[14px] font-medium">
                  {t.name}
                </p>
                <p className="text-warm-500 text-[13px]">{t.title}</p>
                <p className="text-warm-400 text-[12px]">{t.location}</p>
              </div>

              {/* Nav arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-border flex items-center justify-center text-warm-500 hover:bg-warm-700 hover:text-white hover:border-warm-700 transition-all cursor-pointer bg-transparent rounded-full"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-border flex items-center justify-center text-warm-500 hover:bg-warm-700 hover:text-white hover:border-warm-700 transition-all cursor-pointer bg-transparent rounded-full"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right — quote */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <p className="text-warm-500 text-[12px] tracking-[0.15em] uppercase mb-5">
              Chosen by Designers
            </p>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="font-serif text-[24px] md:text-[32px] font-normal text-warm-700 leading-[1.35] italic mb-6"
              >
                "{t.quote}"
              </motion.blockquote>
            </AnimatePresence>
            <span className="text-warm-400 text-[13px]">
              {active + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
