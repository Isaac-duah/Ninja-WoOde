import ImageOneHomepage from "../images/ImageOneHomepage.png"; // go up one level, then into images
import Golf from "../images/GolfImage.png";
import Swim from "../images/SwimImage.png";
import Tennis from "../images/RacketImage.png";

import { useState, useEffect } from "react";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const sports = [
    "Golf",
    "Tennis",
    "Swimming",
    "Basketball",
    "Polo",
    "Taekwondo",
  ];

  return (
    <div>
      {/* Grid Level -1 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-12  space-y-20 ">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center items-start space-y-6 md:px-10 mt-10">
          <h1 className="text-5xl font-bold">Choose your fun</h1>
          <p className="text-lg text-gray-600">
            Learn, Play, Improve with Ninja WoOde
          </p>

          {/*New Code - DROP DOWN*/}

          <div>
            {/*Dropdown Button*/}
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="inline-flex justify-center w-48 rounded-xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              Select a Sport
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.937a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Items */}
            {isOpen && (
              <div className="origin-top-right absolute mt-2 w-48 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {" "}
                  {sports.map((sport) => (
                    <a
                      key={sport}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-lg"
                    >
                      {sport}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/*NEW CODE ENDS HERE*/}

          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Learn More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={ImageOneHomepage}
            alt="Image of Sports"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      {/* Grid Level -2 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-12 space-y-20">
        {/* Right Side -  Image */}
        <div className="flex justify-center items-start">
          <img src={Golf} alt="" className="w-full rounded-lg" />
        </div>

        {/* Left Side -  Text */}
        <div className="flex flex-col justify-center items-start space-y-6 md:px-10 ">
          <h1 className="text-5xl font-bold">Golf Training</h1>
          <p className="text-lg text-gray-600">
            Perfect your swing with certified golf coaches near you.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Read More
          </button>
        </div>
      </div>
      {/* Grid Level -3 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-12  space-y-20 ">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center items-start space-y-6 md:px-10 mt-10">
          <h1 className="text-5xl font-bold">Swimming Sessions</h1>
          <p className="text-lg text-gray-600">
            From floating basics to competitive strokes, find the best
            instructors.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Learn More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={Swim}
            alt="Image of Swim Cap and Goggle"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      {/* Grid Level -4 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-12 space-y-20">
        {/* Right Side -  Image */}
        <div className="flex justify-start items-start">
          <img src={Tennis} alt="" className="w-3/4 rounded-lg" />
        </div>

        {/* Left Side -  Text */}
        <div className="flex flex-col justify-center items-start space-y-6 md:px-10 ">
          <h1 className="text-5xl font-bold">Tennis Lessons</h1>
          <p className="text-lg text-gray-600">
            Sharpen your serve, forehand, and strategy.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
