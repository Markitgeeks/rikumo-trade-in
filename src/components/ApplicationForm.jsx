import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Palette, ArrowRight, ArrowLeft } from "lucide-react";

const BUSINESS_TYPES = [
  "Interior Design Studio",
  "Architecture Firm",
  "Home Staging Company",
  "Design-Build Firm",
  "Set Design / Styling",
  "Hospitality Design",
  "Other",
];

const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Mixed Use",
  "Other",
];

const PURCHASE_FREQUENCIES = [
  "One-time project",
  "1-2 times per year",
  "Quarterly",
  "Monthly",
  "Ongoing / as needed",
];

const inputClass =
  "w-full px-0 py-3 bg-transparent text-sm text-warm-900 placeholder:text-warm-300 border-0 border-b border-warm-200 focus:outline-none focus:border-sage-500 transition-colors";

const selectClass =
  "w-full px-0 py-3 bg-transparent text-sm text-warm-900 border-0 border-b border-warm-200 focus:outline-none focus:border-sage-500 transition-colors appearance-none cursor-pointer";

export default function ApplicationForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    setAgreed(false);
    setStep(1);
    onClose();
  }

  const totalSteps = 3;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-warm-900/60 backdrop-blur-sm overflow-y-auto py-6 px-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-white w-full max-w-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
          >
            {/* Left sidebar - visual panel */}
            <div className="hidden md:flex md:w-2/5 bg-warm-900 relative flex-col justify-between p-8 overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1545083036-b175dd155a1d?w=600&q=60')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Palette size={18} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl font-light text-white mb-3 leading-snug">
                  Designer Trade
                  <br />
                  Application
                </h3>
                <p className="text-warm-400 text-sm leading-relaxed">
                  Join our exclusive trade program and receive 15% off eligible products for your design projects.
                </p>
              </div>

              {/* Step indicators */}
              <div className="relative z-10 space-y-3">
                {["Your Details", "Business Info", "Review & Submit"].map(
                  (label, i) => (
                    <div
                      key={label}
                      className={`flex items-center gap-3 transition-all duration-300 ${
                        step === i + 1
                          ? "text-white"
                          : step > i + 1
                          ? "text-sage-400"
                          : "text-warm-600"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                          step === i + 1
                            ? "bg-white text-warm-900"
                            : step > i + 1
                            ? "bg-sage-500 text-white"
                            : "bg-warm-800 text-warm-500"
                        }`}
                      >
                        {step > i + 1 ? "✓" : i + 1}
                      </div>
                      <span className="text-sm">{label}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right content area */}
            <div className="md:w-3/5 flex flex-col overflow-y-auto">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-warm-400 hover:text-warm-900 transition-colors cursor-pointer bg-transparent border-0 z-20"
              >
                <X size={20} />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full"
                  >
                    {/* Mobile step indicator */}
                    <div className="md:hidden px-6 pt-6 pb-2">
                      <div className="flex gap-1">
                        {[1, 2, 3].map((s) => (
                          <div
                            key={s}
                            className={`h-1 flex-1 rounded-full transition-all ${
                              s <= step ? "bg-sage-500" : "bg-warm-200"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-warm-400 text-xs mt-2">
                        Step {step} of {totalSteps}
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="px-6 md:px-8 py-6 flex flex-col flex-1"
                    >
                      <AnimatePresence mode="wait">
                        {/* Step 1: Contact */}
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                            className="flex-1"
                          >
                            <h4 className="font-serif text-xl text-warm-900 mb-1">
                              Contact Information
                            </h4>
                            <p className="text-warm-400 text-xs mb-8">
                              Tell us who you are
                            </p>

                            <div className="space-y-5">
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                    First Name *
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    placeholder="Jane"
                                    className={inputClass}
                                  />
                                </div>
                                <div>
                                  <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                    Last Name *
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    placeholder="Tanaka"
                                    className={inputClass}
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                  Email *
                                </label>
                                <input
                                  type="email"
                                  required
                                  placeholder="jane@yourstudio.com"
                                  className={inputClass}
                                />
                              </div>
                              <div>
                                <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                  Phone
                                </label>
                                <input
                                  type="tel"
                                  placeholder="(555) 000-0000"
                                  className={inputClass}
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 2: Business */}
                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                            className="flex-1"
                          >
                            <h4 className="font-serif text-xl text-warm-900 mb-1">
                              Business Details
                            </h4>
                            <p className="text-warm-400 text-xs mb-8">
                              Tell us about your practice
                            </p>

                            <div className="space-y-5">
                              <div>
                                <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                  Company / Studio Name *
                                </label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Studio Name Inc."
                                  className={inputClass}
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                    Website / Portfolio
                                  </label>
                                  <input
                                    type="url"
                                    placeholder="https://yourstudio.com"
                                    className={inputClass}
                                  />
                                </div>
                                <div>
                                  <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                    Instagram
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="@yourstudio"
                                    className={inputClass}
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                    Business Type *
                                  </label>
                                  <select required className={selectClass}>
                                    <option value="">Select type...</option>
                                    {BUSINESS_TYPES.map((t) => (
                                      <option key={t} value={t}>
                                        {t}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div>
                                  <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                    Project Type
                                  </label>
                                  <select className={selectClass}>
                                    <option value="">Select type...</option>
                                    {PROJECT_TYPES.map((t) => (
                                      <option key={t} value={t}>
                                        {t}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                    City *
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    placeholder="Brooklyn"
                                    className={inputClass}
                                  />
                                </div>
                                <div>
                                  <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                    State / Region *
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    placeholder="NY"
                                    className={inputClass}
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                    Zip / Postal Code *
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    placeholder="11201"
                                    className={inputClass}
                                  />
                                </div>
                                <div>
                                  <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                    Country *
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    placeholder="United States"
                                    className={inputClass}
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 3: Review & Submit */}
                        {step === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                            className="flex-1"
                          >
                            <h4 className="font-serif text-xl text-warm-900 mb-1">
                              Almost There
                            </h4>
                            <p className="text-warm-400 text-xs mb-8">
                              A few more details and you're done
                            </p>

                            <div className="space-y-5">
                              <div>
                                <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                  Resale Certificate / Tax ID
                                </label>
                                <input
                                  type="text"
                                  placeholder="Optional — speeds up approval"
                                  className={inputClass}
                                />
                              </div>
                              <div>
                                <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                  Estimated Purchase Frequency
                                </label>
                                <select className={selectClass}>
                                  <option value="">Select frequency...</option>
                                  {PURCHASE_FREQUENCIES.map((f) => (
                                    <option key={f} value={f}>
                                      {f}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <label className="text-[11px] tracking-wide text-warm-400 uppercase">
                                  Notes / Additional Information
                                </label>
                                <textarea
                                  rows={3}
                                  placeholder="Tell us about your design practice and how you plan to use Rikumo products..."
                                  className={`${inputClass} resize-none`}
                                />
                              </div>

                              {/* What you'll get */}
                              <div className="bg-sage-50 border border-sage-100 p-5 mt-2">
                                <p className="text-xs font-medium text-sage-700 mb-3 tracking-wide uppercase">
                                  Program Benefits
                                </p>
                                <ul className="text-sm text-warm-600 space-y-2">
                                  <li className="flex items-start gap-2">
                                    <span className="text-sage-500 mt-0.5">✓</span>
                                    15% off eligible products
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-sage-500 mt-0.5">✓</span>
                                    Dedicated trade support contact
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-sage-500 mt-0.5">✓</span>
                                    Priority access to new collections
                                  </li>
                                </ul>
                              </div>

                              {/* Terms */}
                              <label className="flex items-start gap-3 cursor-pointer mt-4">
                                <input
                                  type="checkbox"
                                  checked={agreed}
                                  onChange={(e) => setAgreed(e.target.checked)}
                                  className="mt-0.5 w-4 h-4 accent-sage-500"
                                />
                                <span className="text-xs text-warm-500 leading-relaxed">
                                  I agree to Rikumo's Trade Program Terms &
                                  Conditions. I understand that submitting this
                                  application does not guarantee approval, and that
                                  trade pricing is available only on eligible
                                  products.
                                </span>
                              </label>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Navigation buttons */}
                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-warm-100">
                        {step > 1 ? (
                          <button
                            type="button"
                            onClick={() => setStep(step - 1)}
                            className="flex items-center gap-1.5 text-sm text-warm-500 hover:text-warm-900 transition-colors cursor-pointer bg-transparent border-0 px-0"
                          >
                            <ArrowLeft size={14} />
                            Back
                          </button>
                        ) : (
                          <div />
                        )}

                        {step < totalSteps ? (
                          <button
                            type="button"
                            onClick={() => setStep(step + 1)}
                            className="flex items-center gap-2 px-6 py-2.5 bg-warm-900 text-white text-sm tracking-wide hover:bg-warm-800 transition-colors cursor-pointer border-0"
                          >
                            Continue
                            <ArrowRight size={14} />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={!agreed}
                            className={`flex items-center gap-2 px-6 py-2.5 text-sm tracking-wide font-medium transition-all duration-300 cursor-pointer border-0 ${
                              agreed
                                ? "bg-sage-500 text-white hover:bg-sage-600"
                                : "bg-warm-200 text-warm-400 cursor-not-allowed"
                            }`}
                          >
                            <Send size={14} />
                            Submit Application
                          </button>
                        )}
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="px-8 py-16 text-center flex flex-col items-center justify-center flex-1"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2,
                      }}
                      className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={32} className="text-sage-500" />
                    </motion.div>

                    <h3 className="font-serif text-2xl font-light text-warm-900 mb-3">
                      Application Submitted
                    </h3>

                    <div className="max-w-sm space-y-3">
                      <p className="text-warm-500 text-sm leading-relaxed">
                        Your application has been sent to{" "}
                        <strong className="text-warm-800">
                          info@morihata.com
                        </strong>{" "}
                        for review.
                      </p>

                      <p className="text-warm-500 text-sm leading-relaxed">
                        Once approved, you'll receive Designer Trade pricing on
                        eligible products. We typically respond within 2-3
                        business days.
                      </p>

                      <div className="bg-warm-50 p-4 mt-4 text-left space-y-2">
                        <p className="text-[11px] tracking-wide text-warm-400 uppercase">
                          Next steps
                        </p>
                        <div className="flex items-center gap-3 text-sm text-warm-600">
                          <span className="w-5 h-5 bg-sage-100 rounded-full flex items-center justify-center text-[10px] text-sage-600 font-medium flex-shrink-0">
                            1
                          </span>
                          We review your credentials
                        </div>
                        <div className="flex items-center gap-3 text-sm text-warm-600">
                          <span className="w-5 h-5 bg-sage-100 rounded-full flex items-center justify-center text-[10px] text-sage-600 font-medium flex-shrink-0">
                            2
                          </span>
                          Your account is tagged for trade pricing
                        </div>
                        <div className="flex items-center gap-3 text-sm text-warm-600">
                          <span className="w-5 h-5 bg-sage-100 rounded-full flex items-center justify-center text-[10px] text-sage-600 font-medium flex-shrink-0">
                            3
                          </span>
                          Log in to access your 15% discount
                        </div>
                      </div>

                      <button
                        onClick={handleClose}
                        className="mt-4 px-8 py-2.5 bg-warm-900 text-white text-sm tracking-wide hover:bg-warm-800 transition-colors cursor-pointer border-0"
                      >
                        Return to Site
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
