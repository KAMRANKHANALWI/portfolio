export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Timeline", link: "#timeline" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About Me ",
    description: `I'm a full-stack web developer with a strong foundation in HTML, CSS, JavaScript, TypeScript, and frameworks like React.js, and Next.js. My journey into web development began with a curiosity for JavaScript, which quickly turned into a passion as I discovered the creativity and problem-solving involved in building engaging web applications. In my free time, I dive into novels, exploring new worlds and stories that fuel my creativity. Let’s connect and work together to bring your ideas to life!`,
    className:
      "lg:col-span-6 md:col-span-6 md:row-span-1 space-evenly  text-justify",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
];

export const skills = [
  { title: "HTML", imageSrc: "/HTML5.svg" },
  { title: "CSS", imageSrc: "/CSS3.svg" },
  { title: "Material UI", imageSrc: "/Material UI.svg" },
  { title: "TailwindCSS", imageSrc: "/tailwind.svg" },
  { title: "JavaScript", imageSrc: "/JavaScript.svg" },
  { title: "TypeScript", imageSrc: "/TypeScript.svg" },
  { title: "React.js", imageSrc: "/React.svg" },
  { title: "Redux", imageSrc: "/Redux.svg" },
  { title: "Node", imageSrc: "/Node.js.svg" },
  { title: "Express.js", imageSrc: "/express.png" },
  { title: "Next.js", imageSrc: "/next.png" },
  { title: "MongoDB", imageSrc: "/Mong.svg" },
  { title: "Java", imageSrc: "/Java.svg" },
  { title: "MySQL", imageSrc: "/MySQL.svg" },
  { title: "Git", imageSrc: "/Github.svg" },
  { title: "Docker", imageSrc: "/Docker.svg" },
  // { title: "Python", imageSrc: "/Python.svg" },
  // { title: "Bootstrap", imageSrc: "/Bootstrap.svg" },
  // { title: "Express", imageSrc: "/Express.svg" },
  // { title: "Next", imageSrc: "/next.js.svg" },
  // { title: "Material UI", imageSrc: "/Material UI.svg" },
  // { title: "Bootstrap", imageSrc: "/Bootstrap.svg" },
  // { title: "TailwindCSS", imageSrc: "/tailwind.svg" },
  // { title: "Figma", imageSrc: "/Figma.svg" },
  // { title: "Node.js", imageSrc: "/Node.js.svg" },
  // { title: "Firebase", imageSrc: "/Firebase.svg" },
  // { title: "PostgreSQL", imageSrc: "/PostgresSQL.svg" },
  // { title: "GraphQL", imageSrc: "/GraphQL.svg" },
  // { title: "Linux", imageSrc: "/Linux.svg" },
  // { title: "Postman", imageSrc: "/Postman.svg" },
  // { title: "VSCode", imageSrc: "/VSCode.svg" },
  // { title: "Hibernate", imageSrc: "/Hibernate.svg" },
];

export const projects = [
  {
    id: 1,
    title: "Uber - Cab Booking App",
    des: "Architected a scalable backend for an Uber clone using Spring Boot, enabling online ride booking with optimized ride-matching and secure payment handling.",
    img: "/car.png",
    iconLists: [
      "/Spring.svg",
      "/Java.svg",
      "/jwt.svg",
      "/Postman.svg",
      "./swagger.svg",
    ],
    link: "https://github.com/KAMRANKHANALWI/uberApp",
  },
  {
    id: 2,
    title: "Music-App",
    des: "Developed a scalable music player app using the MERN stack, featuring playlist management, audio controls, and responsive design.",
    img: "/music.jpg",
    iconLists: [
      "/mongodb.svg",
      "/express1.png",
      "/react.svg",
      "/node.js.svg",
      "/jwt.svg",
    ],
    link: "https://listen-music-world.onrender.com/",
  },
  {
    id: 3,
    title: "Electronics-Store",
    des: "Implemented a responsive e-commerce app with product management, secure authentication, Stripe payment integration, and admin panel.",
    img: "/store.png",
    iconLists: [
      "/react.svg",
      "/node.js.svg",
      "/mongodb.svg",
      "/jwt.svg",
      "/Cloudinary.svg",
    ],
    link: "https://quantum-electronics.onrender.com/",
  },
  {
    id: 4,
    title: "Brain Tumor Detection Using CNN",
    des: "Built a CNN model to classify brain tumor images with high accuracy, deployed in a Flask app for real-time predictions.",
    img: "/brain.jpg",
    iconLists: ["/TensorFlow.svg", "/Keras.svg", "/Numpy.svg", "/Anaconda.svg"],
    link: "https://github.com/KAMRANKHANALWI/BrainTumorProject",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/KAMRANKHANALWI",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/kamrankhanalwi/",
  },
  {
    id: 3,
    img: "/insta.svg",
    url: "https://www.instagram.com/kamrankhanalwi/",
  },
];
