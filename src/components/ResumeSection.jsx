import React from "react";
import { FiDownload } from "react-icons/fi";

const ResumeSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-3xl font-bold text-white mb-6">My Resume</h2>

      <div className="bg-white/60 backdrop-blur-lg shadow-xl border border-green-100 rounded-3xl p-6 w-full max-w-3xl text-center transition-all duration-300">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-[450px] rounded-xl border border-green-300 shadow-inner"
        ></iframe>
        <a
          href="/resume.pdf"
          download
          className="mt-5 inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium shadow hover:bg-green-700 transition-all duration-200"
        >
          <FiDownload className="text-base" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeSection;
