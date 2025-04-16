import { UserIcon } from "@heroicons/react/24/outline"; // Import the icon

const techStack = [
  { name: "Javascript", color: "bg-blue-100", text: "text-blue-700" },
  { name: "React", color: "bg-teal-100", text: "text-teal-700" },
  { name: "Next.js", color: "bg-pink-100", text: "text-pink-700" },
  { name: "Strapi", color: "bg-yellow-100", text: "text-yellow-700" },
];

const About = () => {
  return (
    <div className="max-w-xl w-full bg-[#ecfdf5] rounded-2xl shadow-md p-6 border border-green-200 font-bold font-[Inter] transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center mb-4">
        <UserIcon className="h-6 w-6 text-green-700 mr-2" /> {/* Add the icon here */}
        <h2 className="text-xl md:text-2xl font-semibold text-green-700">
          About The Developer
        </h2>
      </div>

      <p className="text-gray-700 leading-relaxed mb-3">
        I’m a web developer who loves transforming ideas into interactive
        digital experiences. Whether it’s a sleek portfolio, a complex
        dashboard, or a user-friendly app, I build with clean code and creative
        vision.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">I specialize in:</p>

      <div className="flex flex-wrap gap-3 mb-5">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className={`px-4 py-2 rounded-lg font-medium shadow-sm transition transform duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer ${tech.color} ${tech.text}`}
          >
            {tech.name}
          </div>
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed">
        Beyond code, I'm always learning, designing, and dreaming up new ways to
        make the web more awesome.
      </p>
    </div>
  );
};

export default About;
