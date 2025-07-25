import React from "react";
import { motion } from "framer-motion";

type MapCoverProps = {
  title?: string;
  subtitle?: string;
  mapSrc: string;
  externalLink?: string;
};

const MapCover: React.FC<MapCoverProps> = ({
  title = "Găsește-ne pe hartă",
  subtitle = "Te așteptăm cu drag la salon!",
  mapSrc,
  externalLink,
}) => {
  return (
    <section className="w-full py-20 px-6 sm:px-10 lg:px-24 bg-gradient-to-b from-neutral-100 via-gray-50 to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-black">
      {/* Titlu și subtitlu */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 dark:text-white mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Harta + efect alb-negru */}
      <motion.div
        className="group rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800 max-w-6xl mx-auto transition-all"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative w-full h-[400px] md:h-[500px]">
          <iframe
            src={mapSrc}
            className="w-full h-full border-0 grayscale transition duration-500 ease-in-out group-hover:grayscale-0 focus:grayscale-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Salon Location Map"
          />
        </div>
      </motion.div>

      {/* Link extern (deschide în Google Maps) */}
      {externalLink && (
        <div className="text-center mt-6">
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md"
          >
            Deschide în Google Maps
          </a>
        </div>
      )}
    </section>
  );
};

export default MapCover;
