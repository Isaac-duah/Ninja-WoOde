import { useState, useEffect } from "react";
import ManTaekwondo from "../images/ManTaekwondoImage.png";
import ManBBall from "../images/ManBasketballImage.png";
import ManSwim from "../images/ManSwimming.png";
import ManTennis from "../images/ManTennis.png";

const slides = [
  {
    image: ManBBall,
    title: "BASKETBALL",
  },
  {
    image: ManTaekwondo,
    title: "TAEKWONDO",
  },
  {
    image: ManSwim,
    title: "SWIMMING",
  },
  {
    image: ManTennis,
    title: "TENNIS",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Carousel - START code */}
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div className="relative w-[90%] max-w-4xl h-[500px] overflow-hidden rounded-2xl shadow-2xl">
          {/* Slides wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="w-full flex-shrink-0 relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                    {slide.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Left button */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
          >
            ❮
          </button>

          {/* Right button */}
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
          >
            ❯
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 w-full flex justify-center space-x-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {/* Carousel - End code */}
    </>
  );
}

export default Carousel;
