import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const AboutGrid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ id, title, className, titleClassName }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            className={className}
            titleClassName={titleClassName}
          ></BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};

export default AboutGrid;
