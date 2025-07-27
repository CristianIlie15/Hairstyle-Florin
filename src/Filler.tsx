import React from "react";
import backgroundImage from "./assets/Hero/barberr.webp";

const FillerPage: React.FC = () => {
  return (
    <section
      className="w-screen h-screen bg-cover bg-center max-h-[270px] md:max-h-[320px] lg:max-h-[400px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default FillerPage;
