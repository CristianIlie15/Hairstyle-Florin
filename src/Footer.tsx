import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 py-12 px-6 sm:px-10 lg:px-24 select-none"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold tracking-wide select-text">
            Salon Florin
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 select-text">
            Eleganță și stil, la fiecare vizită.
          </p>
        </div>

        {/* Separator */}
        <hr className="border-neutral-300 dark:border-neutral-700 mx-auto w-24" />

        {/* Contact info */}
        <div className="text-sm space-y-1 select-text">
          <p>📞 Telefon: <a href="tel:+40727880869" className="underline hover:text-indigo-300 dark:hover:text-white transition">+40 727 880 869</a></p>
          <p>🏢 Adresă: BadBoys, Strada Rudului 97, Ploiești 100300</p>
          <p>✉️ Email: <a href="mailto:contact@salonflorin.ro" className="underline hover:text-indigo-300 dark:hover:text-white transition">contact@salonflorin.ro</a></p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-6 select-text">
          &copy; {new Date().getFullYear()} Salon Florin. Toate drepturile rezervate.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
