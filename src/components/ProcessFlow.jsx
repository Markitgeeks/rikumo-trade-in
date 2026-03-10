import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Apply",
    description:
      "Complete the Designer Trade application with your business details, portfolio, and project information.",
    detail:
      "Takes about 3 minutes. We ask for your company info, design credentials, and how you plan to use Rikumo products in your projects.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: Search,
    step: "02",
    title: "Review",
    description:
      "Our team at Morihata reviews your application, typically within 2-3 business days.",
    detail:
      "We verify your business credentials, review your portfolio, and assess alignment with our designer program requirements.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Approval",
    description:
      "Approved accounts are tagged in Shopify and receive a confirmation email with next steps.",
    detail:
      "You'll receive a welcome email with your trade account details, program guidelines, and a direct contact for your dedicated trade support.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Access Designer Pricing",
    description:
      "Log in to Rikumo to see exclusive 15% trade pricing on eligible products throughout the store.",
    detail:
      "Trade pricing is automatically applied when you're logged in. Browse, specify, and order with your exclusive discount on eligible products.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&q=80",
  },
];

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);

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
          <h3 className="font-serif text-3xl md:text-5xl font-light text-warm-900 mb-4">
            Four Simple Steps
          </h3>
          <p className="text-warm-500 text-sm max-w-md mx-auto">
            Click each step to learn more about the process
          </p>
        </motion.div>

        {/* Steps row */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 relative mb-12">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-warm-300" />
          {/* Progress line */}
          <motion.div
            className="hidden md:block absolute top-10 left-[12.5%] h-px bg-sage-400"
            initial={{ width: 0 }}
            animate={{
              width: `${(activeStep / 3) * 75}%`,
            }}
            transition={{ duration: 0.5 }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === activeStep;
            const isPast = i < activeStep;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="text-center relative cursor-pointer"
                onClick={() => setActiveStep(i)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 relative z-10 transition-all duration-300 ${
                    isActive
                      ? "bg-sage-500 text-white shadow-lg shadow-sage-200"
                      : isPast
                      ? "bg-sage-100 text-sage-600 border-2 border-sage-300"
                      : "bg-white text-warm-400 border border-warm-200 shadow-sm"
                  }`}
                >
                  <Icon size={22} />
                </motion.div>

                <p
                  className={`text-xs font-medium tracking-[0.2em] uppercase mb-1 transition-colors ${
                    isActive ? "text-sage-500" : "text-warm-400"
                  }`}
                >
                  Step {step.step}
                </p>
                <h4
                  className={`font-serif text-base md:text-xl font-medium mb-2 transition-colors ${
                    isActive ? "text-warm-900" : "text-warm-600"
                  }`}
                >
                  {step.title}
                </h4>
                <p className="text-warm-500 text-xs md:text-sm leading-relaxed hidden md:block">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Detail panel */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-warm-200 overflow-hidden flex flex-col md:flex-row"
        >
          <div className="md:w-2/5 h-48 md:h-auto">
            <img
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <p className="text-sage-500 text-xs tracking-[0.2em] uppercase mb-2">
              Step {steps[activeStep].step}
            </p>
            <h4 className="font-serif text-2xl md:text-3xl font-light text-warm-900 mb-4">
              {steps[activeStep].title}
            </h4>
            <p className="text-warm-600 text-sm md:text-base leading-relaxed mb-4">
              {steps[activeStep].detail}
            </p>
            <div className="flex gap-2 mt-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer border-0 ${
                    i === activeStep
                      ? "bg-sage-500 w-6"
                      : "bg-warm-300 hover:bg-warm-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
