"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 pb-8">
      <div className=" flex justify-center items-center w-full" />

      <div className="relative z-20 flex flex-1 flex-col text-center justify-center items-center">
        <h1 className="bold-52 lg:bold-88 ">
          Volta<span className="text-green-600">Flux</span>
        </h1>
        <p className="text-lg md:text-xl mt-6 text-gray-30 ">
          This site is under maintainence. We will be live soon!
        </p>
        <img src="/batterybg.png" alt="camp" className="md:max-w-[800px]" />
      </div>
    </section>
  );
};

export default Hero;
