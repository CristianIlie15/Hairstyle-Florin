import React, { useState, useEffect, useRef } from "react";

type WorkShowcaseProps = {
  title?: string;
  description?: React.ReactNode;  // schimbat aici
  images: { src: string; alt: string }[];
};

const WorkShowcase: React.FC<WorkShowcaseProps> = ({
  title = "Tunsori care vorbesc de la sine",
  description = (
    <div className=" mt-15 md:mt-18">
      Fiecare tunsoare din galeria de mai jos e realizată de mine, cu atenție, răbdare și respect pentru stilul fiecărui client. Lucrez cu cele mai moderne tehnici – de la fade-uri curate până la tunsori clasice reinterpretate. Eu și colegii mei de la{" "}
      <span className="font-extrabold gradient-text">Barber District</span> credem că fiecare client merită o experiență relaxantă și un rezultat care îl face să zâmbească. Dacă vrei o schimbare sau doar o întreținere, te așteptăm cu{" "}
      <span className=" text-indigo-300 font-bold">vibe bun și seriozitate</span>.
    </div>
  ),
  images,
}) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const timerRef = useRef<number | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, total]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    resetTimer();
  };

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-24 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 dark:text-white mb-3">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
        {/* Slides */}
        <div className="relative h-[400px] sm:h-[500px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              draggable={false}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        {/* Buline colorate pe mobil, albe pe md+ */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => {
            const colors = [
              "bg-blue-500",
              "bg-pink-500",
              "bg-yellow-400",
              "bg-green-500",
              "bg-red-500",
              "bg-purple-500",
            ];
            const color = colors[index % colors.length];
            const isActive = index === current;

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`
                  w-3 h-3 rounded-full transition duration-200 hover:scale-110
                  ${color} 
                  md:${isActive ? "bg-white ring-2 ring-white" : "bg-white/40 hover:bg-white/60 ring-0"}
                `}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
