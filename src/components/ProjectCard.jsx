import React from "react";

const projects = [
  {
    title: "Dummy Project 1",
    image: "../../src/assets/dummy.webp",
    link: "https://example.com",
  },
  {
    title: "Dummy Project 2",
    image: "../../src/assets/dummy.webp",
    link: "https://example.com",
  },
  {
    title: "Dummy Project 3",
    image: "../../src/assets/dummy.webp",
    link: "https://example.com",
  },
  {
    title: "Dummy Project 4",
    image: "../../src/assets/dummy.webp",
    link: "https://example.com",
  },
];

const ProjectCard = () => {
  return (
    <div className="min-h-screen  py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-300 w-80"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-2xl w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-green-700">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
