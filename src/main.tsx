import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import MapCover from './Map.tsx';
import StatsSection from './StatsSection.tsx';
import WorkShowcase from "./WorkShowcase";
import AboutAndServices from './AboutAndServices.tsx';
import Footer from './Footer.tsx';

const images = [
  { src: "/Carusel/hair1.jpg", alt: "Tunsoare modernă" },
  { src: "/Carusel/hair2.jpg", alt: "Tunsoare clasică" },
  { src: "/Carusel/hair3.jpg", alt: "Tunsoare stylish" },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <StatsSection /> 
    <WorkShowcase images={images} />
    <AboutAndServices />
<MapCover
  title="Mă găsești ușor"
  subtitle="Vizitează salonul nostru din centrul Ploieștiului"
  mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.2572226308166!2d26.02091216132776!3d44.93512770711094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2498dec29b05d%3A0x5ad28549759bc8f4!2sDeea%20Body%20Center!5e0!3m2!1sro!2sro!4v1753458497653!5m2!1sro!2sro" 
/>
<Footer />
  </StrictMode>
);
