import { MdConnectWithoutContact } from "react-icons/md";

const Socials = () => {
  return (
    <div className="max-w-xs w-full bg-[#ecfdf5] rounded-[2rem] shadow-2xl p-6 border border-green-200 font-bold font-[Inter] transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-300/60">
      <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-center flex items-center justify-center gap-2">
        <MdConnectWithoutContact className="text-2xl text-green-600" />
        Connect with Me
      </h2>

      <ul className="flex justify-center gap-4 items-center">
        {[
          {
            src: "../../src/assets/github.png",
            alt: "GitHub",
            href: "https://github.com/waseem-basheer21",
          },
          {
            src: "../../src/assets/linkedin.png",
            alt: "LinkedIn",
            href: "https://www.linkedin.com/in/waseem-basheer-0b2268262/",
          },
          {
            src: "../../src/assets/insta.png",
            alt: "Instagram",
            href: "https://instagram.com/",
          },
          {
            src: "../../src/assets/facebook.png",
            alt: "Facebook",
            href: "https://facebook.com/",
          },
        ].map((icon, index) => (
          <li
            key={index}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300"
          >
            <a
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.alt}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-8 h-8 object-contain"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
