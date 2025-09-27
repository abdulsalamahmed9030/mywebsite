// import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
<Header />
<div className="pt-28 md:pt-0">
    <HeroSection />
  </div>
<OurServices />
<WhyChooseUs />
<ContactForm />
{/* <AboutUs /> */}
<Footer />
    </>
  );
}
