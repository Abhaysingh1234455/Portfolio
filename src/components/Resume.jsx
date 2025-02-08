// import React from "react";

const Resume = () => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-4">My Resume</h2>
      
      {/* View Resume */}
      <iframe 
        src="/resume.pdf" 
        width="100%" 
        height="600px" 
        title="Resume"
      />

      {/* Download Resume */}
      <a
        href="/resume.pdf"
        download="My_Resume.pdf"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
