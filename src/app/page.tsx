// import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import ProjectsGrid from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
<Header />
<HeroSection />
<OurServices />
<WhyChooseUs />
<ContactForm />
<ProjectsGrid />
{/* <AboutUs /> */}
<Footer />
    </>
  );
}
