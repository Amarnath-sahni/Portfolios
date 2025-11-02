import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaFileAlt, FaPhoneAlt } from "react-icons/fa";
import { FaNodeJs, FaReact, FaGitAlt, FaCode } from "react-icons/fa";
import { SiMongodb, SiLeetcode } from "react-icons/si";

// --- Data ---
const experiences = [
  {
id: 1,
type: "Training",
company: "Full Stack (MERN) Training – QSpiders",
duration: "Jan 2024 - Mar 2024",
techStack: [
{ name: "Node.js", icon: FaNodeJs },
{ name: "Express.js", icon: FaCode },
{ name: "MongoDB", icon: SiMongodb },
{ name: "React.js", icon: FaReact }
],
syllabus: [
"Node.js Basics – Modules, Event Loop, Async Programming",
"Express.js – Routing, Middleware, Error Handling",
"MongoDB – Collections, CRUD Operations, Mongoose ODM",
"React.js Basics – Components, Props, State, JSX",
"React Router & SPA Navigation",
"Authentication & Authorization (JWT, Cookies, Sessions)",
"Building RESTful APIs – Versioning, Controllers, Services",
"Environment Management & Secure Configuration",
"File Uploads using Multer",
"Deployment – Using Render or Vercel",
"Real-world Mini Project – Full CRUD + Auth + DB Integration"
],
certificateLink: "https://drive.google.com/file/d/1gOhAuWEVoRM2-s7HjgE8xV-2kFz4r4hD/view?usp=sharing"
},
  {
    id: 2,
    type: "Internship",
    company: "Backend Development Summer Intenship – Vital Skill",
    duration: "June 2024 - August 2024",
    techStack: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: FaCode },
      { name: "MongoDB", icon: SiMongodb }
    ],
    syllabus: [
      "Node.js Basics – Modules, Event Loop, Async Programming",
      "Express.js – Routing, Middleware, Error Handling",
      "MongoDB – Collections, CRUD Operations, Mongoose ODM",
      "Authentication & Authorization (JWT, Cookies, Sessions)",
      "Building RESTful APIs – Versioning, Controllers, Services",
      "Environment Management & Secure Configuration",
      "Error Handling & Validation using Joi / Custom Middleware",
      "API Rate Limiting, CORS, Helmet, and Security Practices",
      "File Uploads using Multer",
      "Deployment – Using Render, Vercel, or Railway",
      "Database Hosting & Connection with Cloud MongoDB (Atlas)",
      "Real-world Mini Project – Full CRUD + Auth + DB Integration"
    ],
    certificateLink:
      "https://drive.google.com/file/d/1gOhAuWEVoRM2-s7HjgE8xV-2kFz4r4hD/view?usp=sharing"
  },
  
];

// --- Helper: Icon badge ---
const IconBadge = ({ Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/90 text-black shadow-sm hover:scale-105 transform transition"
    aria-label={label}
  >
    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black text-lg shadow-sm">
      <Icon />
    </span>
    <span className="hidden sm:inline-block font-medium text-sm">{label}</span>
  </button>
);

// --- Slide Panel (opens from right) ---
const TechSlide = ({ open, onClose, techName, syllabus }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.45 }}
          className="fixed inset-y-0 right-0 w-full sm:w-[480px] z-50"
        >
          <div className="h-full bg-gradient-to-b from-black/90 via-[#0b1220]/80 to-black/95 backdrop-blur-md border-l border-white/10 p-6 overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">{techName}</h3>
                <p className="text-sm text-gray-300 mt-1">Suggested syllabus — curated by experts</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                aria-label="Close panel"
              >
                <FaTimes className="text-white" />
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Full Syllabus / Roadmap</h4>
              <ul className="list-disc pl-5 text-sm text-gray-200 space-y-2">
                {syllabus.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/6">
                <h5 className="font-semibold">How to study (expert tips)</h5>
                <ol className="list-decimal pl-5 text-sm mt-2 text-gray-200 space-y-1">
                  <li>Start with fundamentals and build small projects.</li>
                  <li>Read official docs and follow one guided course.</li>
                  <li>Reproduce real-world mini projects & deploy them.</li>
                  <li>Practice problem-solving (DSA) for backend roles.</li>
                  <li>Contribute to open-source and showcase projects on GitHub.</li>
                </ol>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-white text-black font-medium shadow"
              >
                <FaPhoneAlt /> Need mentorship?
              </a>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

// --- Main Component ---
export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [slideOpen, setSlideOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState({ name: "", syllabus: [] });

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openTechSlide = (techName, syllabus) => {
    setSelectedTech({ name: techName, syllabus });
    setSlideOpen(true);
  };

  const closeTechSlide = () => setSlideOpen(false);

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-[#020617] via-[#070b12] to-[#04060a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8">Experience & Training</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Hand-picked trainings and workshops — click a technology to open an expert-curated
          syllabus with study guidance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/6 shadow-lg"
            >
              {/* Top row: Type + Company */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-300 uppercase tracking-widest">{exp.type}</p>
                  <h3 className="text-xl font-bold mt-1">{exp.company}</h3>
                  <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 text-black shadow-sm hover:scale-105 transform transition"
                  >
                    <FaFileAlt />
                    <span className="hidden sm:inline">Certificate</span>
                  </a>

                  <button
                    onClick={() => toggleDetails(index)}
                    className="px-3 py-2 rounded-lg text-sm bg-white/6 hover:bg-white/10 transition"
                  >
                    {openIndex === index ? "Hide" : "View"}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="mt-5 space-y-4">
                <p className="text-gray-300">Brief: Hands-on training, projects and real-world workflows.</p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {exp.techStack.map((t, i) => {
                    const Icon = t.icon;
                    return (
                      <div key={i} className="">
                        <IconBadge
                          Icon={Icon}
                          label={t.name}
                          onClick={() => openTechSlide(t.name, exp.syllabus)}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Expandable details */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="p-4 rounded-lg bg-white/3 border border-white/6 text-sm text-gray-100">
                        <h4 className="font-semibold mb-2">Learning Concepts</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {exp.syllabus.slice(0, 6).map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                        <p className="mt-3 text-xs text-gray-300">
                          Click any technology above to open the full syllabus in a slide panel.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Slide panel component */}
      <TechSlide
        open={slideOpen}
        onClose={closeTechSlide}
        techName={selectedTech.name}
        syllabus={selectedTech.syllabus}
      />
    </section>
  );
}
