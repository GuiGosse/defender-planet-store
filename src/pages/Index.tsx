
import Header from "../components/Header";
import Hero from "../components/Hero";
import PCBuilder from "../components/PCBuilder";
import Advantages from "../components/Advantages";
import Products from "../components/Products";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Advantages />
      <Products />
      <PCBuilder />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
