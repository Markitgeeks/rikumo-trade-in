import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ThreePaths from "./components/ThreePaths";
import ProcessFlow from "./components/ProcessFlow";
import ProductShowcase from "./components/ProductShowcase";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import WholesaleBlock from "./components/WholesaleBlock";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const openForm = () => setFormOpen(true);

  return (
    <div className="min-h-screen bg-cream">
      <Header
        isApproved={isApproved}
        onToggleApproved={() => setIsApproved(!isApproved)}
      />
      <Hero onApplyClick={openForm} />
      <ThreePaths onApplyClick={openForm} />
      <ProcessFlow />
      <ProductShowcase isApproved={isApproved} />
      <Testimonials />
      <CtaBanner onApplyClick={openForm} />
      <WholesaleBlock />
      <Footer />
      <ApplicationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
