import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send } from "lucide-react";

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

function FormField({ label, required, children, className = "" }) {
  return (
    <div className={className}>
      <label className="block text-xs tracking-wide text-warm-600 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-2.5 border border-warm-200 bg-white text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-200 transition-colors";

export default function ApplicationForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    setAgreed(false);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-warm-900/50 backdrop-blur-sm overflow-y-auto py-8 px-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white w-full max-w-2xl shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-warm-400 hover:text-warm-900 transition-colors cursor-pointer bg-transparent border-0"
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
                >
                  {/* Header */}
                  <div className="px-8 pt-10 pb-6 border-b border-warm-100">
                    <p className="text-xs tracking-[0.3em] uppercase text-sage-500 mb-2">
                      Designer Trade Program
                    </p>
                    <h3 className="font-serif text-3xl font-light text-warm-900 mb-2">
                      Apply for Trade Access
                    </h3>
                    <p className="text-warm-500 text-sm leading-relaxed">
                      Complete the form below to apply for Designer Trade
                      pricing. Approved accounts receive 15% off eligible
                      products.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="px-8 py-8">
                    <div className="space-y-6">
                      {/* Contact Info */}
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-warm-400 mb-4">
                          Contact Information
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <FormField label="First Name" required>
                            <input
                              type="text"
                              required
                              placeholder="Jane"
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="Last Name" required>
                            <input
                              type="text"
                              required
                              placeholder="Tanaka"
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="Email" required>
                            <input
                              type="email"
                              required
                              placeholder="jane@studio.com"
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="Phone">
                            <input
                              type="tel"
                              placeholder="(555) 000-0000"
                              className={inputClass}
                            />
                          </FormField>
                        </div>
                      </div>

                      {/* Business Info */}
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-warm-400 mb-4">
                          Business Details
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            label="Company / Studio Name"
                            required
                            className="col-span-2"
                          >
                            <input
                              type="text"
                              required
                              placeholder="Studio Name Inc."
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="Website / Portfolio URL">
                            <input
                              type="url"
                              placeholder="https://yourstudio.com"
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="Instagram Handle">
                            <input
                              type="text"
                              placeholder="@yourstudio"
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="Business Type" required>
                            <select required className={inputClass}>
                              <option value="">Select...</option>
                              {BUSINESS_TYPES.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                          </FormField>
                          <FormField label="Project Type">
                            <select className={inputClass}>
                              <option value="">Select...</option>
                              {PROJECT_TYPES.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                          </FormField>
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-warm-400 mb-4">
                          Business Address
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            label="Street Address"
                            required
                            className="col-span-2"
                          >
                            <input
                              type="text"
                              required
                              placeholder="123 Design District Ave"
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="City" required>
                            <input
                              type="text"
                              required
                              placeholder="Brooklyn"
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="State / Region" required>
                            <input
                              type="text"
                              required
                              placeholder="NY"
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="Zip / Postal Code" required>
                            <input
                              type="text"
                              required
                              placeholder="11201"
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="Country" required>
                            <input
                              type="text"
                              required
                              placeholder="United States"
                              className={inputClass}
                            />
                          </FormField>
                        </div>
                      </div>

                      {/* Additional */}
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-warm-400 mb-4">
                          Additional Information
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <FormField label="Resale Certificate / Tax ID">
                            <input
                              type="text"
                              placeholder="Optional"
                              className={inputClass}
                            />
                          </FormField>
                          <FormField label="Est. Purchase Frequency">
                            <select className={inputClass}>
                              <option value="">Select...</option>
                              {PURCHASE_FREQUENCIES.map((f) => (
                                <option key={f} value={f}>
                                  {f}
                                </option>
                              ))}
                            </select>
                          </FormField>
                          <FormField
                            label="Notes / Additional Information"
                            className="col-span-2"
                          >
                            <textarea
                              rows={3}
                              placeholder="Tell us about your design practice and how you plan to use Rikumo products..."
                              className={`${inputClass} resize-none`}
                            />
                          </FormField>
                        </div>
                      </div>

                      {/* Terms */}
                      <div className="border-t border-warm-100 pt-6">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="mt-1 w-4 h-4 accent-sage-500"
                          />
                          <span className="text-xs text-warm-500 leading-relaxed">
                            I agree to Rikumo's Trade Program Terms & Conditions.
                            I understand that submitting this application does
                            not guarantee approval, and that trade pricing is
                            available only on eligible products upon acceptance
                            into the program.
                          </span>
                        </label>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={!agreed}
                        className={`w-full py-3.5 text-sm tracking-widest uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer border-0 ${
                          agreed
                            ? "bg-sage-500 text-white hover:bg-sage-600"
                            : "bg-warm-200 text-warm-400 cursor-not-allowed"
                        }`}
                      >
                        <Send size={14} />
                        Submit Application
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="px-8 py-20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2,
                    }}
                    className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 size={32} className="text-sage-500" />
                  </motion.div>

                  <h3 className="font-serif text-3xl font-light text-warm-900 mb-4">
                    Thank You for Applying
                  </h3>

                  <div className="max-w-md mx-auto space-y-4">
                    <p className="text-warm-600 text-sm leading-relaxed">
                      Your application has been sent to{" "}
                      <strong className="text-warm-800">
                        info@morihata.com
                      </strong>{" "}
                      for review.
                    </p>

                    <p className="text-warm-600 text-sm leading-relaxed">
                      Once approved, you will receive access to Designer Trade
                      pricing on eligible products. You'll be notified via email
                      when your account is activated.
                    </p>

                    <div className="bg-sage-50 border border-sage-200 p-4 mt-6 text-left">
                      <p className="text-xs tracking-[0.2em] uppercase text-sage-600 mb-2">
                        What happens next
                      </p>
                      <ul className="text-sm text-warm-600 space-y-1.5">
                        <li>1. Our team reviews your application</li>
                        <li>2. Approved accounts are tagged in our system</li>
                        <li>
                          3. You'll receive an email with your trade access
                          details
                        </li>
                        <li>
                          4. Log in to see Designer Trade pricing on eligible
                          products
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={handleClose}
                      className="mt-6 px-8 py-3 bg-warm-900 text-white text-sm tracking-widest uppercase hover:bg-warm-800 transition-colors cursor-pointer border-0"
                    >
                      Return to Site
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
