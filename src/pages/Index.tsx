
import Hero from "../components/Hero";
import PCBuilder from "../components/PCBuilder";
import Advantages from "../components/Advantages";
import FeaturedProducts from "../components/FeaturedProducts";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <PCBuilder />
      <Advantages />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <ContactForm />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
