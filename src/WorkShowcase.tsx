import React, { useState, useEffect, useRef } from "react";

type WorkShowcaseProps = {
  title?: string;
  description?: React.ReactNode;
  images: { src: string; alt: string }[];
};

const WorkShowcase: React.FC<WorkShowcaseProps> = ({
  title = "Tunsori care vorbesc de la sine",
  description = (
    <div className="mt-10 md:mt-14 lg:mt-20 mb-20">
      Fiecare tunsoare din galeria de mai jos e realizată de mine, cu atenție,
      răbdare și respect pentru stilul fiecărui client. Lucrez cu cele mai
      moderne tehnici – de la fade-uri curate până la tunsori clasice
      reinterpretate. Eu și colegii mei de la{" "}
      <span className="font-extrabold gradient-text">BadBoys</span>{" "}
      credem că fiecare client merită o experiență relaxantă și un rezultat
      care îl face să zâmbească. Dacă vrei o schimbare sau doar o întreținere,
      te așteptăm cu{" "}
      <span className="text-indigo-300 font-bold">vibe bun și seriozitate</span>.
    </div>
  ),
  images,
}) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const timerRef = useRef<number | null>(null);

  const dotColors = [
    "bg-blue-500",
    "bg-pink-500",
    "bg-yellow-400",
    "bg-green-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-amber-400",
    "bg-indigo-600",
  ];

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 1920);
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
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 dark:text-white mb-4">
          {title}
        </h2>
        <div className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-6">
          {description}
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-800 mt-10">
        {/* Slides */}
        <div className="relative h-[450px] sm:h-[550px] md:h-[750px] bg-[#292828]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              draggable={false}
              className={`absolute top-0 left-0 w-full h-full object-contain rounded-3xl transition-all duration-1000 ease-in-out ${
                index === current
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
              style={{
                objectPosition: "center",
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => {
            const isActive = index === current;
            const activeColor = dotColors[index % dotColors.length];

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? `${activeColor} ring-2 ring-white scale-110`
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
