import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons

const HeroSection = () => {
  return (
    <motion.section
      className="h-[80vh] flex flex-col md:flex-row items-center justify-center bg-white text-black p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Image */}
      <motion.img
        src="p.jpg"
        alt="Amarnath Sahni"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* About Me Section */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I'm Amarnath Sahni</h1>
        <p className="text-lg md:text-xl mt-3 max-w-md">
          I'm a <span className="font-semibold">MERN Stack Developer</span> and aspiring <span className="font-semibold">Full Stack Engineer</span>.
          I love building scalable web applications and solving complex problems.
        </p>

        {/* Contact Information */}
        <div className="flex justify-center md:justify-start mt-6 space-x-6">
          <a
            href="tel:+1234567890" // Replace with your phone number
            className="flex items-center text-lg font-medium text-black hover:text-gray-600 transition"
          >
            <FaPhoneAlt className="mr-2" /> +91 91425 11468
          </a>
          <a
            href="mailto:your-email@example.com" // Replace with your email
            className="flex items-center text-lg font-medium text-black hover:text-gray-600 transition"
          >
            <FaEnvelope className="mr-2" /> amarnathgithub@gmail.com
          </a>
        </div>

        {/* Contact Button */}
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Me
        </button>
      </div>
    </motion.section>
  );
};

export default HeroSection;