import { skills } from "@/data";
import { CustomCard } from "./ui/CustomCard";

export const Skills = () => {
  return (
    <div className="py-16 bg-black-100 mt-16" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-center font-bold text-[40px] md:text-5xl lg:mb-8  lg:text-6xl lg:mt-8">
          Technical
          <span className="text-purple"> Skills</span>
        </h1>
        <p className="font-sans text-center text-md md:text-lg lg:text-xl  z-10 mx-auto">
        The tools that fuel my code 
        <br />
        the frameworks, languages, and tech essentials.
      </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:mt-28 mt-20">
          {skills.map((skill, index) => (
            <CustomCard
              key={index}
              title={skill.title}
              imageSrc={skill.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
