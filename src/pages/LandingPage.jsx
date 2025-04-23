import Navbar from '../components/Navbar';
import Hero from '../components/Landing/Hero';
import StatsBanner from '../components/Landing/StatsBanner';
import About from '../components/Landing/About';
import Services from '../components/Landing/Services';
import WhyChoseUs from '../components/Landing/WhyChoseUs';
import Testimonial from '../components/Landing/Testimonial';
import Pricing from '../components/Landing/Pricing';
import Cta from '../components/Landing/Cta';
import Footer from '../components/Footer';


const LandingPage = () => {

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <StatsBanner />


      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us */}
      <WhyChoseUs />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Pricing Section - Simple Version */}
      <Pricing />

      {/* CTA Section */}
      <Cta />



      {/* Footer */}
      <Footer />
    </div >
  );
};

export default LandingPage;