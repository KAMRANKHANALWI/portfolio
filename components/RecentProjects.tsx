import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-16" id="projects">
      <h1 className="text-center font-bold text-[40px] md:text-5xl lg:mb-8  lg:text-6xl lg:mt-8">
        My
        <span className="text-purple"> Projects</span>
      </h1>
      <p className="font-sans text-center text-md md:text-lg lg:text-xl  z-10 mx-auto">
        Take a look at some of my projects,
        <br />
        that reflects my passion for development and tech.
      </p>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow hidden lg:rounded-3xl bg-[#13162d]">
                  {/* <img src="/bg.png" alt="bg-img" /> */}
                  <Image
                    src="/bg.png"
                    alt="bg-img"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* <img src={img} alt={title} className="z-10 absolute botom-0" /> */}
                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0"
                  fill
                  style={{ objectFit: "cover" }}
                  priority // Optional, add if the image is important for initial load
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      {/* <img src={icon} alt={icon} className="p-2" /> */}
                      <Image
                        src={icon}
                        alt={icon}
                        className="p-2"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
