import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "🏆 1st Place – College Hackathon",
    description: "Developed a scalable MERN stack web application that stood out among competitors.",
    link: "https://drive.google.com/file/d/1evqfDME2HEjJC7XfarZ_nwg1AjG9I8M3/view?usp=drive_link", // Example project link
  },
  {
    id: 2,
    title: "🥈 2nd Place – TechFest Debugging Competition",
    description: "Showcased problem-solving skills by debugging complex code faster than others.",
    link: "https://drive.google.com/drive/folders/1eryAsJIfv6lrzy4QydwIUyRW3aU_R_Ud", // No link provided, button won't be shown
  },
  {
    id: 3,
    title: "🎓 Backend Development Certification – Techkriti, IIT Kharagpur",
    description: "Gained expertise in MongoDB, Node.js, and Express.js.",
    link: "https://drive.google.com/drive/folders/1eryAsJIfv6lrzy4QydwIUyRW3aU_R_Ud", // Replace with actual certificate link
  },
  {
    id: 4,
    title: "🔍 LeetCode Problem Solver",
    description: "Actively solving algorithmic challenges to improve coding proficiency.",
    link: "", // Placeholder (replace with actual file link later)
  },
  {
    id: 5,
    title: "🚀 Exploring AI for Full-Stack Development",
    description: "Integrating AI concepts to enhance web applications with intelligent features.",
    link: "https://github.com/Amarnath-sahni/AI-fullstack", // Example AI project link
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-950 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-300">🌟 My Achievements</h2>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={`flex flex-col items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Dot for visual interest */}
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-4 border-white relative z-10 shadow-xl"></div>

              {/* Achievement Card */}
              <div className="bg-white text-gray-900 p-6 rounded-lg shadow-2xl w-full md:w-1/2 hover:scale-105 transform transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-indigo-700">{achievement.title}</h3>
                <p className="text-gray-800">{achievement.description}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition"
                  >
                    View Certificate / Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
