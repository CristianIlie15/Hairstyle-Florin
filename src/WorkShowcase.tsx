import React, { useState, useEffect, useRef } from "react";

type WorkShowcaseProps = {
  title?: string;
  description?: string;
  images: { src: string; alt: string }[];
};

const WorkShowcase: React.FC<WorkShowcaseProps> = ({
  title = "Lucrările noastre",
  description = "O selecție de tunsori realizate cu grijă și pasiune de prietenul meu.",
  images,
}) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const timerRef = useRef<number | null>(null);

  // Funcție care pornește sau resetează timerul autoplay
  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000); // 3 secunde autoplay
  };

  // La fiecare schimbare de slide, resetăm timer-ul
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, total]);

  // Când userul apasă pe bulină
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

        {/* Buline */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`w-3 h-3 rounded-full ${
                index === current
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/60 transition"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
