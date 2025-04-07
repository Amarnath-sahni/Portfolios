import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 shadow-md">
      <div className="container mx-auto text-center">
        {/* About Us Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">About Us</h3>
          <p className="text-lg text-black">
            We are a passionate team dedicated to creating innovative and impactful software solutions.
          </p>
        </div>

        {/* Social Links with Custom Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://github.com/Amarnath-sahni?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="g.png"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/amarnath-sahni-171963281/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="l.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://leetcode.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="leet.png"
              alt="LeetCode"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://leetcode.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="w.png"
              alt="Website"
              className="w-8 h-8"
            />
          </a>
          <a
            href="mailto:amarnathgithub@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="e.png"
              alt="Email"
              className="w-8 h-8"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm text-black">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;