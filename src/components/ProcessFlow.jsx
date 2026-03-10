import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Apply",
    description:
      "Complete the Designer Trade application with your business details, portfolio, and project information.",
  },
  {
    icon: Search,
    step: "02",
    title: "Review",
    description:
      "Our team at Morihata reviews your application, typically within 2-3 business days.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Approval",
    description:
      "Approved accounts are tagged in Shopify and receive a confirmation email with next steps.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Access Designer Pricing",
    description:
      "Log in to Rikumo to see exclusive 15% trade pricing on eligible products throughout the store.",
  },
];

export default function ProcessFlow() {
  return (
    <section id="process" className="py-20 md:py-28 bg-warm-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-warm-500 text-xs tracking-[0.3em] uppercase mb-4">
            How It Works
          </p>
          <h3 className="font-serif text-3xl md:text-5xl font-light text-warm-900">
            Four Simple Steps
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-warm-300" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-white border border-warm-200 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-sm">
                  <Icon size={24} className="text-sage-500" />
                </div>

                <p className="text-sage-500 text-xs font-medium tracking-[0.2em] uppercase mb-2">
                  Step {step.step}
                </p>
                <h4 className="font-serif text-xl font-medium text-warm-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-warm-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
