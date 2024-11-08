import React from "react";
import { Timeline } from "./ui/Timeline";

type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

const timelineData: TimelineEntry[] = [
  {
    title: "June 2024 - B. Tech CSE, Jamia Hamdard",
    content: (
      <div>
        <h1 className=" lg:text-2xl text-xl font-semibold mb-2">
          B. Tech in Computer Science, 2020-2024
        </h1>
        <ul className="list-disc pl-6">
          <li>
            Completed B.Tech in Computer Science from Jamia Hamdard University,
            New Delhi.
          </li>
          <li>
            Gained a strong foundation in data structures, algorithms, software
            engineering principles, full-stack development & machine learning.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "May 2024 - Intern @Semantic Climate",
    content: (
      <div>
        <h1 className=" lg:text-2xl text-xl font-semibold mb-2">
          Data Scraper - Automation
        </h1>
        <ul className="list-disc pl-6">
          <li>
            Developed Python scripts to automate data retrieval from
            environmental governance websites, reducing manual effort by 80%.
          </li>
          <li>
            Gained experience in handling pagination, CAPTCHA challenges, and
            efficient data organization.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "2023 - Backend and Frontend Development",
    content: (
      <div>
        <h1 className="lg:text-2xl text-xl font-semibold mb-2">Uber - Cab Booking App:</h1>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Built a scalable backend with Spring Boot, implemented secure
            authentication and authorization with Spring Security, and optimized
            the ride-matching algorithm for faster service.
          </li>
        </ul>
        <h1 className="lg:text-2xl text-xl font-semibold mb-2">Music-App:</h1>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Created a responsive music player with playlist management and audio
            controls using the MERN stack, enhancing user engagement.
          </li>
        </ul>
        <h1 className="lg:text-2xl text-xl font-semibold mb-2">Electronics-Store:</h1>
        <ul className="list-disc pl-6">
          <li>
            Developed an e-commerce site with product management and secure
            online transactions, integrating Stripe for payments.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "2022 - Machine Learning",
    content: (
      <div>
        <h1 className="lg:text-2xl text-xl font-semibold mb-2">
          Brain Tumor Detection Model:
        </h1>
        <ul className="list-disc pl-6">
          <li>
            Developed a CNN model using TensorFlow to classify brain tumor
            images, achieving high accuracy.
          </li>
          <li>
            Deployed the model in a Flask web app for real-time predictions.
          </li>
        </ul>
      </div>
    ),
  },
];

const Journey = () => {
  return (
    <div id="timeline">
      <Timeline data={timelineData} />
    </div>
  );
};

export default Journey;
