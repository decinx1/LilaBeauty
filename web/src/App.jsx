import './styles/global.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import WhyUs from './components/WhyUs/WhyUs';
import Catalog from './components/Catalog/Catalog';
import Boxes from './components/Boxes/Boxes';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppFab from './components/WhatsAppFab/WhatsAppFab';
import WaveDivider from './components/WaveDivider/WaveDivider';

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* Hero (gradient peach/rose) → About (rose-tinted) */}
        <Hero />
        <WaveDivider fill="rose" bg="peach" />

        {/* About (rose gradient) → WhyUs (vibrant rose) */}
        <About />
        <WaveDivider fill="whyus_top" bg="rose" />

        {/* WhyUs (vibrant rose) → Catalog (clean cream) */}
        <WhyUs />
        <WaveDivider fill="cream" bg="whyus_bot" />

        {/* Catalog (cream) → Boxes (warm peach) */}
        <Catalog />
        <WaveDivider fill="peach" bg="cream" />

        {/* Boxes (peach) → Contact (vibrant rose) */}
        <Boxes />
        <WaveDivider fill="whyus_top" bg="peach" />

        {/* Contact (vibrant rose → cream) */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
