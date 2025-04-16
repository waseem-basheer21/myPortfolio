import { useState } from "react";
import { MdConnectWithoutContact, MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const socials = [
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
];

const ContactMeCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start px-4 py-14 bg-[#5fb881]">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 max-w-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Let’s Build Something Amazing Together!
        </h2>
        <p className="text-gray-800 mt-4 font-medium">
          Got a cool idea? Need a dev to bring your vision to life? I’m all
          ears. Whether it’s a quick chat, a big idea, or just a friendly hello
          — I’m here for it.
        </p>
        <p className="text-white mt-2 text-sm italic">
          Let’s turn those pixels and plans into something real. 🚀
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2 bg-[#ecfdf5] backdrop-blur-md rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-green-600 flex items-center justify-center gap-2 mb-6">
            <MdEmail className="text-green-600" />
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {["name", "email", "message"].map((field, idx) => (
              <div key={idx}>
                {field !== "message" ? (
                  <input
                    type={field}
                    placeholder={`Your ${
                      field.charAt(0).toUpperCase() + field.slice(1)
                    }`}
                    className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                  />
                ) : (
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                )}
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-green-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full h-[35vh] lg:w-1/2 bg-[#ecfdf5] backdrop-blur-md rounded-3xl shadow-xl mt-18 p-8 flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl font-semibold text-green-600 flex items-center  gap-2 mb-6">
            <MdConnectWithoutContact className="text-green-600" />
            Connect with Me
          </h3>
          <ul className="flex gap-5 flex-wrap justify-center">
            {socials.map((icon, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow hover:shadow-lg cursor-pointer transition"
              >
                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactMeCard;
