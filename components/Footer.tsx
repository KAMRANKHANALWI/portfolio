import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Get in <span className="text-purple"> touch!</span>
        </h1>
        <p className=" my-5 text-center text-sm text-gray-400">
          If not now, then when? I promise I’m friendly... unless you’re a typo in my code. 😄
        </p>

        <div className="max-w-2xl mx-auto px-6 py-12 bg-gray-50 rounded-lg shadow-lg text-center mb-4 lg:mb-2">
          <p className="text-lg text-gray-700 mb-4">
            Thanks for visiting my portfolio! I’m currently on the lookout for
            exciting new opportunities where I can work with amazing people and,
            of course, grow my skills along the way. If you’re into cool
            projects, techy talk, and having a laugh while getting things done —
            I’m your person.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            You can reach me at{" "}
            <a
              href="mailto:khankamranalwi@gmail.com"
              className="text-[#6b21a8] hover:underline"
            >
              khankamranalwi@gmail.com
            </a>{" "}
            or hit me up on your preferred platform. Looking forward to hearing
            from you — let’s make something awesome together!
          </p>
          <p className="text-sm text-gray-500 italic">
            Oh, and if you’re in Bangalore, we can always hang out — maybe over
            some coffee, talk startups, and pray the weather stays predictable
            for at least an hour. ☕🌦️
          </p>
        </div>
        <a href="mailto:khankamranalwi@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 | Kamran Khan Alwi
        </p>

        <div className="flex items-center md:gap-3 gap-6 m-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 cursor-pointer"
            >
              <img src={info.img} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
