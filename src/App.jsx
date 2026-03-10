import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ThreePaths from "./components/ThreePaths";
import ValueProps from "./components/ValueProps";
import ProductShowcase from "./components/ProductShowcase";
import Testimonials from "./components/Testimonials";
import FeatureCards from "./components/FeatureCards";
import ConceptStore from "./components/ConceptStore";
import Journal from "./components/Journal";
import Instagram from "./components/Instagram";
import WholesaleBlock from "./components/WholesaleBlock";
import Footer from "./components/Footer";
import StickyBar from "./components/StickyBar";
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
      <ValueProps />
      <ProductShowcase isApproved={isApproved} />
      <Testimonials />
      <FeatureCards />
      <ConceptStore />
      <Journal />
      <Instagram />
      <WholesaleBlock />
      <Footer />
      <StickyBar />
      <ApplicationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
