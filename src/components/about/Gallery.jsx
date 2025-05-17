import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GalleryCarousel = () => {
  const images = Array.from({ length: 18 }, (_, i) => `/gallery_carousel/gi${i + 1}.webp`);
  const slides = Array.from({ length: 3 }, (_, i) => images.slice(i * 6, (i + 1) * 6));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 640);
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: isMobile ? 1 : 1,
      spacing: isMobile ? 16 : 0
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });


  useEffect(() => {
    if (!instanceRef.current) return;
    const interval = setInterval(() => instanceRef.current.next(), 6000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const handleMouseEnter = () => instanceRef.current?.pause();
  const handleMouseLeave = () => instanceRef.current?.play();

  return (
      <section className="relative bg-white py-6 px-10 text-gray-900">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 select-none">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 px-5">
            <h2 className="text-4xl font-[playfair] font-semibold text-gray-900">Our Gallery</h2>
            <Link
                to="/gallery"
                className="text-md font-semibold flex flex-row items-center gap-1 mt-3 hover:text-green-800 hover:scale-110 transition-transform"
            >
              <p className="font-[montserrat] text-base">Learn More</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {isMobile ? (
              <div className="relative">
                <div
                    ref={sliderRef}
                    className="keen-slider"
                >
                  {images.map((src, i) => (
                      <div key={i} className="keen-slider__slide">
                        <div className="w-full h-[300px]">
                          <img
                              src={src}
                              alt={`Gallery Image ${i + 1}`}
                              loading="lazy"
                              className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                      </div>
                  ))}
                </div>
                <div className="flex flex-row justify-center gap-10 mt-4">
                  <button
                      aria-label="Previous"
                      onClick={() => instanceRef.current?.prev()}
                      className="bg-[#22370D] text-white rounded-full size-7 flex items-center justify-center shadow-md hover:scale-110 transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                      aria-label="Next"
                      onClick={() => instanceRef.current?.next()}
                      className="bg-[#22370D] text-white rounded-full size-7 flex items-center justify-center shadow-md hover:scale-110 transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

          ) : (
              <div className="relative mx-6">
                <div
                    ref={sliderRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="keen-slider"
                >
                  {slides.map((group, idx) => (
                      <div key={idx} className="keen-slider__slide grid grid-cols-4 gap-4">
                        {group.map((src, i) => {
                          const widthClasses = [
                            "col-span-1",
                            "col-span-2",
                            "col-span-1",
                            "col-span-1",
                            "col-span-1",
                            "col-span-2",
                          ];
                          return (
                              <div
                                  key={i}
                                  className={`overflow-hidden h-[300px] ${widthClasses[i % widthClasses.length]}`}
                              >
                                <img
                                    src={src}
                                    alt={`Gallery Image ${idx * 6 + i + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded-md shadow-md"
                                />
                              </div>
                          );
                        })}
                      </div>
                  ))}
                </div>

                <button
                    aria-label="Previous"
                    onClick={() => instanceRef.current?.prev()}
                    className="absolute top-1/2 -left-12 -translate-y-1/2 -translate-x-1/2 bg-[#22370D] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                    aria-label="Next"
                    onClick={() => instanceRef.current?.next()}
                    className="absolute top-1/2 -right-12 -translate-y-1/2 translate-x-1/2 bg-[#22370D] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
          )}

          {!isMobile && (
              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        className={`w-8 h-2 rounded-full transition ${
                            currentSlide === idx ? "bg-[#C3FF00D9] scale-110" : "bg-[#D9D9D9]"
                        }`}
                    />
                ))}
              </div>
          )}
        </div>
      </section>
  );
};

export default GalleryCarousel;
