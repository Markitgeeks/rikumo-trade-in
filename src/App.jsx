import { useState } from "react";
import Header from "./components/Header";
import TrustBar from "./components/TrustBar";
import Hero from "./components/Hero";
import ThreePaths from "./components/ThreePaths";
import ProcessFlow from "./components/ProcessFlow";
import ProductShowcase from "./components/ProductShowcase";
import CtaBanner from "./components/CtaBanner";
import Testimonials from "./components/Testimonials";
import WholesaleBlock from "./components/WholesaleBlock";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const openForm = () => setFormOpen(true);

  return (
    <div className="min-h-screen">
      <Header
        isApproved={isApproved}
        onToggleApproved={() => setIsApproved(!isApproved)}
      />
      <Hero onApplyClick={openForm} />
      <TrustBar />
      <ThreePaths onApplyClick={openForm} />
      <ProcessFlow />
      <ProductShowcase isApproved={isApproved} />
      <CtaBanner onApplyClick={openForm} />
      <Testimonials />
      <WholesaleBlock />
      <Footer />
      <ApplicationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
