import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: FileText,
    num: "01",
    title: "Apply",
    description:
      "Complete a short application with your business details and portfolio. Takes under 3 minutes.",
  },
  {
    icon: Search,
    num: "02",
    title: "Review",
    description:
      "Our team reviews your credentials and verifies your design practice. Typically 2-3 business days.",
  },
  {
    icon: CheckCircle,
    num: "03",
    title: "Approval",
    description:
      "Approved accounts are tagged in our system. You'll receive a confirmation email with your trade details.",
  },
  {
    icon: Sparkles,
    num: "04",
    title: "Shop & Save",
    description:
      "Log in to see exclusive 15% trade pricing automatically applied on all eligible products.",
  },
];

export default function ProcessFlow() {
  return (
    <section id="process" className="py-24 md:py-32 bg-warm-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-16 md:gap-10 items-start">
          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:sticky md:top-28"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-warm-600" />
              <span className="text-warm-500 text-[11px] tracking-[0.35em] uppercase">
                How It Works
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
              From application
              <br />
              to{" "}
              <em className="not-italic text-sage-400">
                trade pricing
              </em>
            </h2>
            <p className="text-warm-400 text-sm leading-relaxed">
              A straightforward process designed to get you access to designer
              pricing as quickly as possible.
            </p>
          </motion.div>

          {/* Right — steps */}
          <div className="md:col-span-7 md:col-start-6 space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex gap-6 py-10 border-b border-warm-800 last:border-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-warm-700 flex items-center justify-center group-hover:border-sage-400 group-hover:bg-sage-500/10 transition-all duration-300">
                      <Icon
                        size={18}
                        className="text-warm-500 group-hover:text-sage-400 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-sage-400 text-[11px] tracking-[0.2em] uppercase font-medium">
                      Step {step.num}
                    </span>
                    <h3 className="font-serif text-2xl mt-1 mb-3 text-white group-hover:text-sage-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-warm-400 text-sm leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
