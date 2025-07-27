import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaShower, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { GiBeard } from "react-icons/gi";  
import floarea from "./assets/Prices/floarea.jpg";

type Service = {
  name: string;
  duration: string;
  price: string;
  description?: string;
  icon: React.ReactNode;
  rating: number;
};

const services: Service[] = [
  {
    name: "Premium Pack",
    duration: "1 h 30 min",
    price: "150 lei",
    description:
      "Tuns complet, spălat, styling și barbă, inclusiv pensat brici",
    icon: <FaUserTie />,
    rating: 4.89,
  },
  {
    name: "Tuns & Barbă",
    duration: "1 h 10 min",
    price: "110 lei",
    description:
      "Tuns profesional cu aranjare barbă și finisaje detaliate",
    icon: <FaRegStar />,
    rating: 4.82,
  },
  {
    name: "Tuns",
    duration: "45 min",
    price: "80 lei",
    description: "Tuns simplu, rapid și curat",
    icon: <FaRegStar />,
    rating: 4.77,
  },
  {
    name: "Wash & Style",
    duration: "30 min",
    price: "30 lei",
    description: "Spălat și aranjat pentru un look fresh",
    icon: <FaShower />,
    rating: 4.45,
  },
  {
    name: "Barbă",
    duration: "30 min",
    price: "30 - 50 lei",
    description:
      "Îngrijire barbă cu tuns și conturare personalizată",
    icon: <GiBeard />,
    rating: 4.67,
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={"full" + i} className="text-yellow-400" />);
  }

  if (decimal >= 0.25 && decimal < 0.75) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  } else if (decimal >= 0.75) {
    stars.push(<FaStar key="extraFull" className="text-yellow-400" />);
  }

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
      
      {/* Despre mine */}
<motion.div
  className="max-w-6xl mx-auto mb-20 flex flex-col-reverse md:flex-row-reverse items-center gap-8"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <img
    src={floarea}
    alt="Florin - Despre mine"
    className="rounded-3xl w-full md:w-1/2 object-cover shadow-lg "
    loading="lazy"
  />
  <div className="md:w-1/2 px-6 md:p-2 my">
    <h2 className="text-3xl font-bold mb-6 my-10 text-center md:text-left mb-12 md:mb-18">Despre mine</h2>
    <p className="text-lg leading-relaxed mb-4 mt-8">
      Salut! Sunt <span className = "gradient-text font-extrabold text-xl"> Florin</span>, pasionat de arta tunsului și styling-ului masculin. Cu o experiență solidă și o atenție deosebită la detalii, mă asigur că fiecare client pleacă mulțumit, cu un look care îi reflectă personalitatea.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      Stilurile mele variază de la tunsori clasice, elegante, până la cele moderne, urbane, toate realizate cu precizie și profesionalism. Fiecare tunsoare este adaptată nevoilor și dorințelor tale, pentru un rezultat unic și impecabil.
    </p>
    <p className="text-lg leading-relaxed">
      Sunt mândru să am mulți clienți fericiți, care revin mereu pentru calitatea serviciilor și atmosfera prietenoasă pe care o creez în salon. Hai să-ți ofer și ție o experiență care să te facă să te simți  <span className = "text-indigo-400 font-bold">încrezător și bine îngrijit ! </span>
    </p>
  </div>
</motion.div >
      <motion.div
        className="max-w-6xl mx-auto mt-12 md:mt-16 flex justify-center mb-10 md:mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/stanflorinnn/?igsh=MTNuNnJyOWtmejN0bQ%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-4 bg-pink-500 md:bg-neutral-100 dark:md:bg-neutral-800 rounded-full hover:scale-110 hover:bg-pink-500 transition-transform duration-300 shadow-md flex items-center justify-center"
          >
            <FaInstagram className="text-2xl text-neutral-700 dark:text-white" />
          </a>
          <a
            href="https://www.facebook.com/florin.stan.56481379"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-4 bg-blue-600 md:bg-neutral-100 dark:md:bg-neutral-800 rounded-full hover:scale-110 hover:bg-blue-600 transition-transform duration-300 shadow-md flex items-center justify-center"
          >
            <FaFacebookF className="text-2xl text-neutral-700 dark:text-white" />
          </a>
        </div>
      </motion.div>

      {/* Servicii și prețuri */}
      <div className="max-w-6xl mx-auto " id="action">
        <motion.h3
          className="text-2xl sm:text-3xl font-bold text-center tracking-tight mb-20 md:mb-26 lg:mb-32 mt-20 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Servicii și Prețuri
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 cursor-pointer flex flex-col gap-4 shadow-sm hover:shadow-xl transition-shadow mx-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              tabIndex={0}
              role="button"
              aria-label={`Serviciu: ${service.name}, Durata: ${service.duration}, Preț: ${service.price}`}
            >
              <div className="flex items-center gap-4">
                <div className="text-indigo-500 text-3xl">{service.icon}</div>
                <h4 className="text-xl font-semibold text-neutral-800 dark:text-white">
                  {service.name}
                </h4>
                <span className="ml-auto text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {service.duration}
                </span>
              </div>

              <p className="text-lg font-bold text-indigo-400 dark:text-indigo-400">
                {service.price}
              </p>

              {service.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              )}

              {renderStars(service.rating)}

              <a
                href="https://mero.ro/p/florin-stan?absp=company_details_deeplink&campaignId=&campaignSource="
                target="_blank"
                className="self-start px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-600 text-white font-semibold text-sm hover:from-indigo-600 hover:to-pink-700 transition-all focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-pink-700"
                aria-label={`Rezervă ${service.name}`}
                style={{ backgroundImage: "linear-gradient(to right, rgb(43,127,255), rgb(61,46,8))", }}
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
