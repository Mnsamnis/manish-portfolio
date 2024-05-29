import React, { useEffect, useState } from "react";
import Typing from 'react-typing-effect'
import bannerImage from "../img/profile.png";
// import bannerWallpaper from "../img/banner-wallpaper.svg";

const Banner = () => {
  const [tagIndex, setTagIndex] = useState(0);
  const tags = [
    "A Full Stack Developer",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTagIndex((prevIndex) => (prevIndex + 1) % tags.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="main-container  flex flex-col md:flex-row items-center py-4">
        {/* First */}
        <div className="w-full md:w-1/2 flex justify-center ">
          {/* Text */}
          <div className="mt-4 w-2/3 md:ms-10 text-gray-900">
            <h3 className="text-3xl font-semibold text-gray-900">Hi, I am</h3>
            <h1 className="mt-4 text-5xl font-bold text-[#8f6e58]">
              Manish Kumar
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">
              {tags[tagIndex]}
            </h2>
            <p className="mt-4 mb-3">
              With a knack for problem-solving and a passion for technology,
              Manish crafts innovative solutions using Java and SpringBoot. Explore his projects, skills,
              and connect with him on GitHub, LinkedIn, or drop a message to
              start a conversation. 
            </p>
            <div className="h-[40px]">
            <Typing
                text={['Let\'s build something great together!', 'Connect with me on LinkedIn.', 'Check out my GitHub projects.']}
                speed={50}
                eraseSpeed={30}
                eraseDelay={2500}
                typingDelay={100}
                cursorRenderer={cursor => <h3>{cursor}</h3>}
                displayTextRenderer={(text, i) => {
                  return (
                    <p className="mb-6">
                      {text}
                    </p>
                  );
                }}
              /></div>
            <div className="icons-container flex space-x-7 text-white">
              <a
                href="https://github.com/Mnsamnis"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-gray-800 w-8 h-8 rounded-full flex justify-center items-center hover:scale-110 ease-in duration-300"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/manish-kumar-373aa21b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-gray-800 w-8 h-8 rounded-full flex justify-center items-center hover:scale-110 ease-in duration-300"
              >
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="mailto:mnsamnis@gmail.com"
                className="cursor-pointer bg-gray-800 w-8 h-8 rounded-full flex justify-center items-center hover:scale-110 ease-in duration-300"
              >
                <i className="fa-solid fa-envelope text-xl"></i>
              </a>
              <a className="cursor-pointer bg-gray-800 w-8 h-8 rounded-full flex justify-center items-center hover:scale-110 ease-in duration-300">
                <i className="fa-regular fa-address-book text-xl"></i>
              </a>
            </div>
            <br />
            <div
              className="px-5 py-2 w-32 bg-[#cfb6a4] rounded-full shadow-lg  duration-200 hover:scale-105 cursor-pointer"
              href="/contact"
            >
              Contact Me
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* Image */}
          <img className=" rounded-full shadow-lg w-fit" src={bannerImage} />
        </div>
      </div>
    </>
  );
};

export default Banner;
