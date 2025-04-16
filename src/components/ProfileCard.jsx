import avatar from "../assets/avatar.jpg";
import { Typewriter } from "react-simple-typewriter";

const ProfileCard = () => {
  return (
    <div className="glow-border flex flex-col sm:flex-row items-center gap-6 sm:gap-10 p-6 sm:p-8 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] bg-[#ecfdf5] rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex-shrink-0">
        <img
          src={avatar}
          alt="Waseem Basheer"
          className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover border-4 border-green-500"
        />
      </div>
      <div className="text-center sm:text-left font-bold font-[Inter]">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Hi! 👋
        </h1>
        <p className="text-lg font-semibold text-green-600 mb-1">
          <Typewriter
            words={["I am Waseem Basheer"]}
            loop={false}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <p className="text-gray-600 max-w-md mt-2">
          A web developer who loves crafting beautiful, fast, and user-friendly
          websites.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
