import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code, Library, Server, Wind, Database, GitBranch, Users, Terminal 
} from "lucide-react"; // Importing icons

const skillsData = {
  Frontend: [
    { name: "JavaScript", icon: <Code size={24} /> },
    { name: "React.js", icon: <Library size={24} /> },
    { name: "Tailwind CSS", icon: <Wind size={24} /> },
    { name: "HTML", icon: <Library size={24} /> },
    { name: "CSS", icon: <Wind size={24} /> }
  ],
  Backend: [
    { name: "Node.js", icon: <Server size={24} /> },
    { name: "Express.js", icon: <Server size={24} /> }
  ],
  Database: [
    { name: "MongoDB", icon: <Database size={24} /> },
    { name: "SQL", icon: <Database size={24} /> },
    { name: "DBMS", icon: <Database size={24} /> }
  ],
  Tools: [
    { name: "Git/GitHub", icon: <GitBranch size={24} /> },
    { name: "VS Code", icon: <Terminal size={24} /> }
  ],
  "Soft Skills": [
    { name: "Teamwork", icon: <Users size={24} /> },
    { name: "Problem-Solving", icon: <Terminal size={24} /> }
  ]
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>

      {/* Tabs for Filtering */}
      <div className="flex justify-center space-x-4 mb-6">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-lg font-medium transition ${
              activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {skillsData[activeCategory].map((skill, i) => (
          <motion.div
            key={i}
            className="p-4 bg-gray-200 rounded-lg flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            {skill.icon}
            <span className="mt-2 text-lg font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
