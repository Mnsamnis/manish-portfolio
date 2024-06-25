import { useState } from "react";

const Project = () => {
  const [projects] = useState([
    {
      id: 1,
      icon: "fa-shop",
      title: "E-Commerce Website",
      description: "I have developed an E-Commerce Web Application using Spring Boot in the backend, React in the frontend, and MySQL database. It has various functionalities like user authentication, adding items to the cart, managing its contents, and seamlessly navigating a secure checkout process to finalize their purchases.",
      actionButton: {
        title: "Check",
        link: "https://github.com/Mnsamnis/ECOMMERCE_WEB",
      },
    },
    {
      id: 2,
      icon: "fa-book",
      title: "Library Management System",
      description: "This application is built using Spring MVC, JSP, and MySQL database. Users can perform CRUD (Create, Read, Update, Delete) operations over books. The book entity contains name, author, and price.",
      actionButton: {
        title: "Check",
        link: "https://github.com/Mnsamnis/Book-Collection-Management/tree/main/mvc_and_orm",
      },
    },
    {
      id: 3,
      icon: "fa-cloud",
      title: "Weather Detection Application",
      description: "This web application is used to detect the weather of any location. Created using React and the Visual Crossing Weather API. Use this application to see the weather of your location.",
      actionButton: {
        title: "Try it!",
        link: "https://weather-app-black-chi.vercel.app/",
      },
    },
  ]);

  return (
    <div id="project" className="main-container py-14">
      <h1 className="text-5xl text-[#805d45] font-bold text-center underline">Projects</h1>
      <div className="services-container flex flex-wrap justify-center mt-12 space-y-5 lg:space-y-0 lg:space-x-5">
        {projects.map((project) => (
          <div key={project.id} className="flex-1 cursor-pointer hover:scale-105 ease-in duration-300  bg-[#faf4eb] p-5 text-center shadow-lg rounded-xl m-2 max-w-xs flex flex-col">
            <i className={`text-5xl fa-solid ${project.icon} mb-4`}></i>
            <h1 className="text-4xl mb-4">{project.title}</h1>
            <p className="flex-grow mb-4">{project.description}</p>
            <div className="hover:scale-110 ease-in duration-300">
            <a href={project.actionButton.link} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-[#cfb6a4] text-xl rounded-full shadow-lg">
              {project.actionButton.title}
            </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
