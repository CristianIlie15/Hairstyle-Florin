import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-24 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 dark:text-white mb-3">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="rounded-3xl shadow-2xl overflow-hidden"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WorkShowcase;
