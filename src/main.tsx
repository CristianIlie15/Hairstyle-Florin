import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import MapCover from './Map.tsx';
import StatsSection from './StatsSection.tsx';
import WorkShowcase from "./WorkShowcase";
import AboutAndServices from './AboutAndServices.tsx';
import Footer from './Footer.tsx';
import Filler from './Filler.tsx';

const images = [
  { src: "/Carusel/photo1.webp", alt: "Tunsoare modernă" },
  { src: "/Carusel/photo2.webp", alt: "Tunsoare clasică" },
  { src: "/Carusel/photo3.webp", alt: "Tunsoare stylish" },
  { src: "/Carusel/photo5.webp", alt: "Tunsoare stylish" },
  { src: "/Carusel/photo6.webp", alt: "Tunsoare stylish" },
  { src: "/Carusel/photo7.webp", alt: "Tunsoare stylish" },
  { src: "/Carusel/photo8.webp", alt: "Tunsoare stylish" },
  { src: "/Carusel/photo9.webp", alt: "Tunsoare stylish" },
  { src: "/Carusel/photo10.webp", alt: "Tunsoare stylish" },
  { src: "/Carusel/photo11.webp", alt: "Tunsoare stylish" },


];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <StatsSection /> 
    <Filler />
    <WorkShowcase images={images} />
    <AboutAndServices />
<MapCover
  title="Mă găsești ușor"
  subtitle="Mă găsești la salonul BadBoys, Strada Rudului 97, Ploiești, cod 100300. Te aștept cu drag!"
  mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.7294685735674!2d26.012999391563813!3d44.92883679647733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b249dd018a1d17%3A0x195af544f2eafc42!2sBadBoys!5e0!3m2!1sro!2sro!4v1753490226457!5m2!1sro!2sro" 
/>
<Footer />
  </StrictMode>
);
