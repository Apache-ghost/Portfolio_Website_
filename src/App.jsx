import Banner from "./components/banner/Banner.jsx";
import Contact from "./components/contact/Contact.jsx";
import Features from "./components/features/Features.jsx";
import Footer from "./components/footer/Footer.jsx";
import FooterBottom from "./components/footer/FooterBottom.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Projects from "./components/projects/Projects.jsx";
import Resume from "./components/resume/Resume.jsx";
import FloatingParticles from "./components/decorations/FloatingParticles.jsx";
import BackgroundBlobs from "./components/decorations/BackgroundBlobs.jsx";
import GlowingLines from "./components/decorations/GlowingLines.jsx";
// import  Testimonial from "./components/tesimonial/Testimonial.jsx"


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 relative overflow-hidden">
        <FloatingParticles />
        <BackgroundBlobs />
        <GlowingLines />
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Features />
          <Projects />
          <Resume />
        {/* < Testimonial/> */}
          <Contact />
          <Footer />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default App;
