import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ThreePaths from "./components/ThreePaths";
import ApplicationForm from "./components/ApplicationForm";
import ProductShowcase from "./components/ProductShowcase";
import ProcessFlow from "./components/ProcessFlow";
import WholesaleBlock from "./components/WholesaleBlock";
import Footer from "./components/Footer";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  return (
    <div className="min-h-screen">
      <Header
        isApproved={isApproved}
        onToggleApproved={() => setIsApproved(!isApproved)}
      />
      <Hero />
      <ThreePaths onApplyClick={() => setFormOpen(true)} />
      <ProcessFlow />
      <ProductShowcase isApproved={isApproved} />
      <WholesaleBlock />
      <Footer />
      <ApplicationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
