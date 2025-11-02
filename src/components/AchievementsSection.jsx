import { useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaCertificate, FaCode, FaRocket } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    title: "1st Place – College Hackathon",
    description: "Developed a scalable MERN stack web application that stood out among competitors.",
    icon: FaTrophy,
    link: "https://drive.google.com/file/d/1evqfDME2HEjJC7XfarZ_nwg1AjG9I8M3/view?usp=drive_link",
    details: ["Full-stack development using MERN.", "Implemented user authentication and CRUD operations.", "Deployed the app on Vercel."],
  },
  {
    id: 2,
    title: "2nd Place – TechFest Debugging Competition",
    description: "Showcased problem-solving skills by debugging complex code faster than others.",
    icon: FaAward,
    link: "https://drive.google.com/drive/folders/1eryAsJIfv6lrzy4QydwIUyRW3aU_R_Ud",
    details: ["Debugged multiple JS and React issues.", "Optimized performance and solved logic errors."]
  },
  {
    id: 3,
    title: "Backend Development Certification – IIT Kharagpur",
    description: "Gained expertise in MongoDB, Node.js, and Express.js.",
    icon: FaCertificate,
    link: "https://drive.google.com/drive/folders/1eryAsJIfv6lrzy4QydwIUyRW3aU_R_Ud",
    details: ["Learned advanced backend concepts.", "Implemented secure APIs and authentication."]
  },
  {
    id: 4,
    title: "LeetCode Problem Solver",
    description: "Solving algorithmic challenges to boost coding skills.",
    icon: FaCode,
    link: "https://leetcode.com/u/Amarnath_sahni/",
    details: ["Daily DSA practice.", "Covered arrays, strings, linked lists, and more."]
  },
  {
    id: 5,
    title: "Exploring AI for Full-Stack Development",
    description: "Combining AI with React + Node to build intelligent apps.",
    icon: FaRocket,
    link: "https://github.com/Amarnath-sahni/ML-",
    details: ["Integrated AI models with frontend React apps.", "Built intelligent features using Node.js backend."]
  },
];

const AchievementsSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-wide uppercase border-b-4 border-yellow-400 inline-block pb-2">
          My Achievements
        </h2>

        <div className="space-y-12">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border-l-4 border-yellow-400 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400 text-3xl">
                      <Icon />
                    </span>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm bg-black text-white font-semibold rounded-md shadow hover:bg-gray-800 transition"
                    >
                      View Certificate
                    </a>
                  )}
                </div>

                <p className="mt-3 text-gray-300">{item.description}</p>

                {openId === item.id && (
                  <div className="mt-4 text-gray-200 bg-black/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Details:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {item.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => toggleDetails(item.id)}
                  className="mt-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
                >
                  {openId === item.id ? "Hide Details" : "View Details"}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;