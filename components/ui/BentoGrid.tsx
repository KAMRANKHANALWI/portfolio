"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div>
        {id === 1 && (
          // add background animation
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className={`heading m-2 `}>{title}</div>
          {/* <div className={`text-center font-bold text-[40px] md:text-5xl mb-8  lg:text-6xl lg:mt-8`}>{title}</div> */}

          <div className="font-sans md:text-lg lg:text-xl text-justify max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mx-auto px-4 py-6 space-y-6">
            <p className="leading-relaxed">
              I'm a full-stack web developer with a strong foundation in HTML,
              CSS, JavaScript, TypeScript, and frameworks like React.js, and
              Next.js. My journey into web development began with a curiosity
              about JavaScript, which soon grew into a passion for building
              stuff that solves problems and adds value to people's daily lives!
            </p>

            <p className="leading-relaxed">
              When I’m not coding, you can find me immersed in novels, exploring
              literature worlds, and drawing inspiration from stories that fuel
              my creativity.
            </p>

            <p className="leading-relaxed">
              I love exploring the city, uncovering hidden gems, and
              finding quirky spots that add a little extra charm to my day. It’s
              my way of recharging, resetting, and gaining fresh
              perspectives—like finding little adventures between the lines of
              code. 🌍✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
