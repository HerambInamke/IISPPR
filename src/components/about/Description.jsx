import React from "react";
import { images } from "./images.js"

const Description = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-16 p-6 pt-12 md:pb-36 w-full pl-10">
      <div className="relative w-full max-w-lg flex-shrink-0">
        <div className="md:w-[28rem] md:h-[28rem] sm:w-[24rem] sm:h-[24rem] w-[18rem] h-[18rem] rounded-xl overflow-hidden shadow-lg">
          <img
            src={images.work_together_2}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-28 right-5 sm:-right-5 md:w-[20rem] md:h-[20rem] sm:w-[16rem] sm:h-[16rem] w-[12rem] h-[12rem] rounded-xl overflow-hidden shadow-md">
          <img
            src={images.work_together_1}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-xl text-center lg:text-left lg:mt-10 mt-14 md:mt-1">
        <h2 className="text-4xl font-[playfair] font-bold text-gray-900 mb-6 mt-6 md:mt-32">Education</h2>
        <p className="text-gray-700 font-[montserrat] text-base leading-relaxed max-w-md mx-auto lg:mx-0">
          At IISPPR, we believe every child deserves a strong foundation. From early childhood to elementary education, we uncover the gaps that hold children back and create solutions rooted in their realities. With two schools in Saharanpur district, Uttar Pradesh, we work hand-in-hand with children, families, and communities, partnering with both hearts and governments to bring lasting change in education.
        </p>
      </div>
    </section>
  );
};

export default Description;
