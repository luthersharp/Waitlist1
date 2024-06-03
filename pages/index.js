import Hero from "../components/ui/Hero";
import Navbar from "../components/ui/Navbar";
import GradientWrapper from "../components/GradientWrapper";
import CenteredCTA from "../components/ui/CenteredCTA";
import CTA from "../components/ui/CTA";
import Footer from "../components/ui/Footer";
import FooterCTA from "../components/ui/FooterCTA";
import Accordion from "../components/ui/accordition";



export default function Home() {
  return (
    <>
    
      <Navbar />
      <Hero />
      <GradientWrapper className='pb-0 py-0 my-0'>
        <CenteredCTA />
      </GradientWrapper>
      <CTA />
      <FooterCTA />
      <Accordion/>
      <Footer />
    </>
  );
}