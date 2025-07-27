import { motion } from "framer-motion";
import heroBG from "./assets/Hero/hero.webp";

function App() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[800px] lg:min-h-[930px] overflow-hidden flex items-center">
      {/* Background blur image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm md:blur-none z-0"
        style={{ backgroundImage: `url(${heroBG})` }}
      />

      {/* Content container */}
      <motion.div
        className="relative z-10 w-full flex flex-col items-right justify-center text-left text-white p-6 md:w-1/2 md:ml-auto md:items-start md:text-left md:p-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="text-sm md:text-base uppercase tracking-widest mb-2"
          variants={itemVariants}
        >
          hairstylist
        </motion.h3>

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wider"
          variants={itemVariants}
        >
          Stan Florin
        </motion.h1>

        <motion.ul
          className="space-y-4 mb-6 mt-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              title: "✂️ Fade-uri precise",
              desc: "Skin fade, low/mid/high fade executate impecabil",
              extraClasses: "gradient-text font-semibold",
            },
            {
              title: "✂️ Tunsori moderne",
              desc: "Crop, taper, buzz, pompadour, slick back etc.",
              extraClasses: "gradient-text font-semibold",
            },
            {
              title: "✂️ Adaptabilitate",
              desc: "Stiluri personalizate pentru orice tip de păr",
              extraClasses: "gradient-text font-semibold",
            },
            {
              title: "„Nimeni nu pleacă nemulțumit din scaun.”",
              desc: "Client 100% mulțumit – fiecare tunsoare e o recomandare în plus",
              extraClasses: "italic text-indigo-300",
            },
          ].map(({ title, desc, extraClasses }, i) => (
            <motion.li key={i} variants={itemVariants}>
              <h3 className={`text-xl md:text-2xl mb-2 md:mb-4 ${extraClasses}`}>
                {title}
              </h3>
              <p className="text-base md:text-lg">{desc}</p>
            </motion.li>
          ))}
        </motion.ul>

<motion.a
  href="#action"
  className="inline-block mt-6 mx-auto md:mx-0 px-6 md:px-8 py-3 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  style={{
    backgroundImage: "linear-gradient(to right, rgb(43,127,255), rgb(61,46,8))",
  }}
  variants={itemVariants}
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Programează-te
</motion.a>


      </motion.div>
    </section>
  );
}

export default App;
