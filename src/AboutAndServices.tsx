import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaUserTie, FaShower } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // stele pline, jumătate, goale
import floarea from "./assets/Prices/floarea.jpg";

type Service = {
  name: string;
  price: string;
  description?: string;
  icon: React.ReactNode;
  rating: number; // adăugat rating
};

const services: Service[] = [
  { name: "Tuns Clasic", price: "50 lei", description: "Tuns modern, adaptat formei feței.", icon: <FaStar className="text-3xl text-pink-500" />, rating: 4.75 },
  { name: "Barbierit", price: "30 lei", description: "Tradițional și relaxant.", icon: <FaUserTie className="text-3xl text-blue-500" />, rating: 4.85 },
  { name: "Tuns + Spălat", price: "65 lei", description: "Pachet complet pentru un look fresh.", icon: <FaShower className="text-3xl text-green-500" />, rating: 4.95 },
  { name: "Styling Eveniment", price: "80 lei", description: "Pentru ocazii speciale.", icon: <FaStar className="text-3xl text-yellow-400" />, rating: 4.90 },
];

// Funcție care returnează stelele vizuale și rating-ul numeric
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;

  // Stele pline
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={"full" + i} className="text-yellow-400" />);
  }

  // Stea jumătate dacă decimalul este între 0.25 și 0.75 (aprox)
  if (decimal >= 0.25 && decimal < 0.75) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  } else if (decimal >= 0.75) {
    // Dacă e aproape 1, punem o stea plină în plus
    stars.push(<FaStar key="extraFull" className="text-yellow-400" />);
  }

  // Stele goale până la 5
  while (stars.length < 5) {
    stars.push(<FaRegStar key={"empty" + stars.length} className="text-yellow-400" />);
  }

  return (
    <div className="flex items-center gap-1 mt-2">
      {stars}
      <span className="text-yellow-500 font-semibold text-sm ml-2">{rating.toFixed(2)}</span>
    </div>
  );
};


const AboutAndServices: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-24 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white select-none">
      {/* About Section */}
      <motion.div
        className="max-w-6xl mx-auto flex md:flex-row items-center gap-10 flex-col-reverse"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="md:order-2 flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-3xl shadow-xl">
          <img
            src={floarea}
            alt="Salon"
            className="w-full h-[370px] sm:h-[400px] object-cover"
            loading="lazy"
          />
        </div>

        <div className="md:order-1 w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Despre Salonul Nostru</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            Oferim servicii profesionale de hairstyle și grooming într-un mediu prietenos și relaxant.
            Cu o atenție deosebită pentru detalii și stil, transformăm fiecare vizită într-o experiență.
          </p>
        </div>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        className="max-w-6xl mx-auto mt-12 md:mt-16 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:scale-110 hover:bg-pink-500 transition-transform duration-300 shadow-md flex items-center justify-center"
          >
            <FaInstagram className="text-2xl text-neutral-700 dark:text-white" />
          </a>
          <a
            href="https://www.facebook.com/USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:scale-110 hover:bg-blue-600 transition-transform duration-300 shadow-md flex items-center justify-center"
          >
            <FaFacebookF className="text-2xl text-neutral-700 dark:text-white" />
          </a>
          <a
            href="https://wa.me/40712345678"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:scale-110 hover:bg-green-500 transition-transform duration-300 shadow-md flex items-center justify-center"
          >
            <FaWhatsapp className="text-2xl text-neutral-700 dark:text-white" />
          </a>
        </div>
      </motion.div>

{/* Services Section */}
<div className="max-w-6xl mx-auto mt-20">
  <motion.h3
    className="text-2xl sm:text-3xl font-bold text-center mb-10 tracking-tight"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.6 }}
  >
    Servicii și Prețuri
  </motion.h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
    {services.map((service, index) => (
      <motion.div
        key={index}
        className="p-6 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 cursor-pointer flex flex-col gap-4 shadow-sm hover:shadow-xl transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        viewport={{ once: true }}
        tabIndex={0}
        role="button"
        aria-label={`Serviciu: ${service.name}, Preț: ${service.price}, Rating: ${service.rating.toFixed(2)}`}
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">{service.icon}</div>
          <h4 className="text-xl font-semibold text-neutral-800 dark:text-white">{service.name}</h4>
          <span className="ml-auto text-sm font-medium text-neutral-500 dark:text-neutral-400">{service.price}</span>
        </div>

        {service.description && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {service.description}
          </p>
        )}

        {/* Rating */}
        {renderStars(service.rating)}

        {/* Text introductiv pentru buton */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Rezervă acum o programare pentru acest serviciu.
        </p>

        {/* Butonul */}
        <a
          href="/programare"
          className="self-start px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm hover:from-pink-600 hover:to-purple-700 transition-all focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-700"
          aria-label={`Rezervă ${service.name}`}
        >
          Programează-te
        </a>
      </motion.div>
    ))}
  </div>
</div>
    </section>
  );
};

export default AboutAndServices;
