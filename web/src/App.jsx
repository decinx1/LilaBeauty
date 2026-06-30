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

        {/* About (rose gradient) → WhyUs (DARK plum) */}
        <About />
        <WaveDivider fill="plum" bg="rose" />

        {/* WhyUs (dark plum) → Catalog (clean white) */}
        <WhyUs />
        <WaveDivider fill="cream" bg="plum" />

        {/* Catalog (cream) → Boxes (warm peach) */}
        <Catalog />
        <WaveDivider fill="peach" bg="cream" />

        {/* Boxes (peach) → Contact (dark plum) */}
        <Boxes />
        <WaveDivider fill="plum" bg="peach" />

        {/* Contact (dark plum) */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
