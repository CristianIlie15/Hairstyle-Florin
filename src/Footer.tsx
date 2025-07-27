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
            Stan Florin
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 select-text">
            Eleganță și stil, la fiecare vizită.
          </p>
        </div>

        {/* Separator */}
        <hr className="border-neutral-300 dark:border-neutral-700 mx-auto w-full" />

        {/* Contact info */}
        <div className="text-sm space-y-1 select-text text-lg ">
    
          <p>🔗 Link: <a href="https://mero.ro/p/florin-stan?absp=company_details_deeplink&campaignId=&campaignSource=" className="underline hover:text-indigo-300 dark:hover:text-white transition">https://mero.ro/p/florin-stan</a></p>
          <p>🏢 Adresă: BadBoys, Strada Rudului 97, Ploiești 100300</p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-6 select-text mb-6">
          &copy; {new Date().getFullYear()} Stan Florin . Toate drepturile rezervate.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
