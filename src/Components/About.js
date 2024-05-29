import { useState } from "react";
import bannerImage from "../img/bi1.jpg";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Software Engineer",
    desc1: `As a Software Engineer, I leverage Java, Spring Boot, and MySQL to develop robust backend solutions. Proficient in HTML, CSS, JavaScript, and React, I craft intuitive user interfaces. Skilled in Git, Bitbucket, and Jenkins, I ensure efficient source code management and streamline deployment processes. `,
    desc2: ` Passionate about innovation, I translate business requirements into impactful technical solutions with a keen eye for design and problem-solving.
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });

  return (
    <>
      <div id="about" className="main-container  border py-16">
        <h1 className="text-center text-[#805d45] pb-16 text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex flex-col lg:flex-row items-center">
          {/* image container */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img
              className="w-fit  object-cover sm:rounded-full lg:rounded-none"
              src={data.image}
              alt="Manish Kumar"
            />
          </div>

          {/* text container */}
          <div className="w-full lg:w-1/2 flex justify-center px-4 lg:px-0">
            <div className="space-y-5 w-full lg:w-2/3">
              <h1 className="text-3xl lg:text-5xl font-semibold">{data.title}</h1>
              <p className="text-base lg:text-lg">{data.desc1}</p>
              <p className="text-base lg:text-lg">{data.desc2}</p>
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
