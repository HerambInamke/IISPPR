import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";

const GalleryCarousel = () => {
  const images = Array.from({ length: 18 }, (_, i) => `/gallery_carousel/gi${i + 1}.webp`);
  const slides = Array.from({ length: 3 }, (_, i) => images.slice(i * 6, (i + 1) * 6));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imdobile, setImdobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setImdobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider(
    !imdobile
      ? {
          loop: true,
          slides: { perView: 1 },
          slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
          },
        }
      : null
  );

useEffect(() => {
    if (!instanceRef.current) return;
    const interval = setInterval(() => {
      instanceRef.current.next();
    }, 6000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const handleMouseEnter = () => instanceRef.current?.pause();
  const handleMouseLeave = () => instanceRef.current?.play();

  // Your image sizes for desktop (640px+), no max-width limit
  const imageDimensions = {
    0: "sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] lg:w-[55vh] lg:h-[33vh] lg:mr-[21px] xl:w-[55vw] xl:h-[33vh] xl:m-0 ",
    1: "sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] md:mx-[10vh] lg:w-[31vh] lg:h-[33vh] xl:w-[50vw] xl:h-[33vh] xl:m-0",
    2: "sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] lg:w-[44vh] lg:h-[33vh] lg:ml-[0px] xl:w-[50vw] xl:h-[33vh] xl:m-0",

    3: "sm:w-[200px] sm:h-[200px] sm:mr-[1vh] md:w-[130px] md:h-[150px] md:mr-[2vh] lg:w-[55vh] lg:h-[33vh] lg:mr-[1px] xl:w-[55vh] xl:h-[33vh]",
    4: "sm:w-[160px] sm:h-[200px] sm:mr-[11vh] md:w-[180px] md:h-[150px] md:mr-[10vh] lg:w-[40vh] lg:h-[33vh] xl:w-[25vw] xl:h-[33vh] xl:mr-[10vw] xl:ml-[1px]",
    5: "sm:w-[330px] sm:h-[200px] md:w-[250px] md:h-[150px] lg:w-[55vh] lg:h-[33vh] lg:ml-[10px] xl:w-[50vw] xl:h-[33vh] xl:ml-[1.5vw]",

    6: "sm:w-[300px] sm:h-[200px] md:w-[250px] md:h-[150px] lg:w-[50vh] lg:h-[33vh] lg:mr-[2px] xl:w-[50vw] xl:h-[33vh]",
    7: "sm:w-[180px] sm:h-[200px] sm:ml-[12vh] md:w-[120px] md:h-[150px] md:ml-[10vh] lg:w-[30vh] lg:h-[33vh] lg:ml-[70px] xl:w-[28vw] xl:h-[33vh] xl:ml-[7vw] ",
    8: "sm:w-[200px] sm:h-[200px] md:w-[140px] md:h-[150px] md:ml-[2vh] lg:w-[30vh] lg:h-[33vh] xl:w-[55vh] xl:h-[33vh] xl:ml-[1px]",

    9: "lg:w-[400px] lg:h-[300px] sm:w-[200px] sm:mr-[7vh] sm:h-[200px] md:w-[130px] md:h-[150px] md:mr-[2vh] lg:w-[55vh] lg:h-[33vh] xl:w-[55vh] xl:h-[33vh] xl:mr-[1px]",
    10: "lg:w-[400px] lg:h-[300px] md:mr-[22vh] sm:w-[140px] sm:h-[200px] sm:mr-[16vh] md:w-[180px] md:h-[150px] md:mr-[10vh] lg:w-[55vh] lg:h-[33vh] xl:w-[25vw] xl:h-[33vh] xl:mr-[9vw] xl:ml-[1px]",
    11: "lg:w-[700px] lg:h-[300px] sm:w-[370px] sm:h-[200px] md:w-[250px] md:h-[150px] lg:w-[55vh] lg:h-[33vh] xl:w-[50vw] xl:h-[33vh] xl:ml-[1px]",

    12: "lg:w-[35vh] lg:h-[33vh] lg:mr-[5px] sm:w-[250px] sm:h-[200px] sm:mr-[5vh] md:w-[180px] md:h-[150px] xl:w-[25vw] xl:h-[33vh] xl:m-0",
    13: "lg:w-[35vh] lg:h-[33vh] lg:mr-[5px] sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] xl:w-[25vw] xl:h-[33vh] xl:m-0",
    14: "lg:w-[35vh] lg:h-[33vh] sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] xl:w-[25vw] xl:h-[33vh] xl:m-0",

    15: "lg:w-[35vh] lg:h-[33vh] lg:mr-[1px] sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] xl:w-[25vw] xl:h-[33vh] xl:m-0",
    16: "lg:w-[34vh] lg:h-[33vh] sm:w-[200px] sm:h-[200px] sm:mx-[5vh] md:w-[150px] md:h-[150px] xl:w-[25vw] xl:h-[33vh] xl:m-0",
    17: "lg:w-[34vh] lg:h-[33vh] lg:ml-[2px] sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] xl:w-[25vw] xl:h-[33vh] xl:m-0",
  };

  return (
    <section className="relative bg-white overflow-visible">

      <div className="relative w-full mx-auto px-4 md:px-20 z-10 select-none">
        {/* Header */}
        <div className="md:px-20 flex flex-col md:flex-row justify-between items-center mb-6 md:mb-0">
          <h2 className="text-2xl font-[Playfair Display] font-semibold text-gray-900">Our Gallery</h2>
          <Link
            to="/gallery"
            className="text-md font-[600] font-[Montserrat] text-[17px] hover:text-green-800 hover:scale-110 transition-transform"
          >
            See More →
          </Link>
        </div>

        <div className="md:px-20 md:pb-15 lg:mt-[2vh]">
          {/* Carousel */}
          {imdobile ? (
            <div className="overflow-x-auto whitespace-nowrap scroll-mdooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {slides.map((group, slideIdx) => (
                <div
                  key={slideIdx}
                  className="inline-flex flex-wrap gap-3 justify-center w-screen flex-shrink-0"
                >
                  {group.map((imgSrc, idx) => {
                    const key = slideIdx * 6 + idx;
                    return (
                      <div className="flex justify-center items-start w-[300px] h-[200px]" key={key}>
                        <img
                          src={imgSrc}
                          alt={`Gallery Image ${key + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ) : (
            <div
              ref={sliderRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="keen-slider"
            >
              {slides.map((group, slideIdx) => (
                <div
                  key={slideIdx}
                  className="keen-slider__slide grid grid-cols-3 gap-3 justify-center overflow-visible"
                >
                  {group.map((imgSrc, idx) => {
                    const key = slideIdx * 6 + idx;
                    const dimensions = imageDimensions[key] || "w-[600px] h-[300px]";
                    return (
                      <div
                        key={key}
                        className="flex justify-center items-start overflow-visible flex-shrink-0 hover:scale-110 hover:rounded-md hover:shadow-md transition-all ease-out duration-1000"
                      >
                        <img
                          src={imgSrc}
                          alt={`Gallery Image ${key + 1}`}
                          loading="lazy"
                          className={`${dimensions} object-cover rounded-md max-w-none `}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* Navigation Arrows (hidden on mobile) */}
          {!imdobile && (
            <>
              <button
                aria-label="Previous slide"
                onClick={() => instanceRef.current?.prev()}
                className="absolute top-1/2 lg:left-[15vh] lg:top-[39vh] sm:left-[30vh] sm:top-[86vh] md:top-[28vh] md:left-[15vh] transform -translate-y-1/2 bg-green-800 shadow-md rounded-full w-11 h-11 flex items-center justify-center text-green-900 hover:bg-red-500 hover:scale-110 transition"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 25 24"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                onClick={() => instanceRef.current?.next()}
                className="absolute top-1/2 lg:right-[15vh] lg:top-[39vh] sm:right-[30vh] sm:top-[86vh] md:right-[15vh] md:top-[28vh] transform -translate-y-1/2 bg-green-800 shadow-md rounded-full w-11 h-11 flex items-center justify-center text-green-900 hover:bg-red-500 hover:scale-110 transition"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 15 24"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-6 space-x-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`w-[2.5vw] h-[1vh] rounded-lg transition-transform ${
                      currentSlide === idx ? "bg-[#C3FF00D9] scale-110" : "bg-[#D9D9D9]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
