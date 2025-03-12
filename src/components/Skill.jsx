import { BorderBeam } from "@stianlarsen/border-beam";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Skill = () => {
  return (
    <div id="skill" className="pb-10 pt-8 bg-black">
      {/* Header Section */}
      <div className="flex items-center justify-center pt-14 pb-14 bg-black text-white px-8 text-center">
        <div>
          <h1 className="text-4xl mb-4 font-bold">Skills That Define Me</h1>
          <p className="text-xl pb-5">
            All Skills Here{" "}
            <span style={{ color: "#BB86FC", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "MERN Specialist",
                  "Front-End Developer",
                  "Eye-Catching UI/UX",
                  "User-Friendly Web Apps",
                  "Responsive Design",
                  "JavaScript",
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "Firebase",
                  "Tailwind CSS",
                  "CSS",
                  "HTML",
                  "Git",
                  "GitHub",
                  "!",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className="text-gray-300 text-base">
            A showcase of my expertise and tools of the trade, reflecting my
            journey in mastering technology and design. These skills drive my
            creativity and innovation in every project.
          </p>
        </div>
      </div>

      {/* Skill Icons Section */}
      <div className="pt-8 pb-14 bg-black text-white px-8 text-center">
        <div className="xl:w-9/12 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 place-items-center">
          {[
            {
              name: "HTML",
              img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
              colorFrom: "#F44336",
              colorTo: "#FF5733",
            },
            {
              name: "CSS",
              img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
              colorFrom: "#0000CD",
              colorTo: "#BBDEFB",
            },
            {
              name: "JavaScript",
              img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
              colorFrom: "#D3D3D3",
              colorTo: "#FFD700",
            },
            {
              name: "React.js",
              img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
              colorFrom: "#87CEEB",
              colorTo: "#00BFFF",
            },
            {
              name: "MongoDB",
              img: "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png",
              colorFrom: "#4CAF50",
              colorTo: "#006800",
            },

            {
              name: "Node.js",
              img: "https://nodejs.org/static/images/logo.svg",
              colorFrom: "#25D366",
              colorTo: "#90EE90",
            },
            {
              name: "Express.js",
              img: "https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp",
              colorFrom: "#D3D3D3",
              colorTo: "#808080",
            },
            {
              name: "Tailwind CSS",
              img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
              colorFrom: "#FFB6C1",
              colorTo: "#E1306C",
            },
            {
              name: "Firebase",
              img: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
              colorFrom: "#8B0000",
              colorTo: "#FF4500",
            },

            {
              name: "Git",
              img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
              colorFrom: "#6A0DAD",
              colorTo: "#FF69B4",
            },
            {
              name: "GitHub",
              img: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png",
              colorFrom: "#5F9EA0",
              colorTo: "#5F9EA0",
            },
          ].map((skill, index) => (
            <div key={index} className="relative p-4">
              <img
                src={skill.img}
                alt={skill.name}
                className="h-16 w-16 object-contain transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white"
              />
              <BorderBeam
                size={300}
                duration={10}
                colorFrom={skill.colorFrom}
                colorTo={skill.colorTo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
