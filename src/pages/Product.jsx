import ProductShowcase from '../components/ProductShowcase/ProductShowcase';
import IntelligenceFlow from '../components/IntelligenceFlow/IntelligenceFlow';
import CTA from '../components/CTA/CTA';
import './Product.css';

export default function Product() {
  return (
    <div className="product-page">
      <ProductShowcase />
      <div className="product-story-connector" aria-hidden="true">
        <span className="product-story-connector__line" />
        <span className="product-story-connector__particle" />
      </div>
      <IntelligenceFlow />
      <CTA
        eyebrow="Have any questions?"
        heading="Securing Assets, Protecting People, Driving Efficiency..."
        description="Contact our experts at + 91 97317 47999 or sales@soukhyatech.com to deploy the Intelligent Earth Pit Monitoring System (I-ES)."
        primaryLabel="Contact a Soukhya Expert"
        primaryTo="/contact"
        secondaryLabel="Explore Our Solutions"
        secondaryTo="/solutions"
      />
    </div>
  );
}
