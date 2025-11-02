import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTimes, FaFileAlt } from 'react-icons/fa';
import { FaNodeJs, FaReact, FaCode } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

// --- Data ---
const projects = [
  {
    title: 'SmartExpense',
    description: 'Expense tracker app to manage, analyze, and visualize spending habits with smart insights and budgeting tools.',
    techStack: ['MERN Stack', 'Gemini AI API', 'Chart.js'],
    story: 'Developed a full-stack financial tracker that integrates AI-driven insights and dynamic data visualization for better financial planning.',
    link: 'https://github.com/Amarnath-sahni/Expense_Feontend',
  },
  {
    title: 'Hotel/Home Rental Platform',
    description: 'A full-stack web application for listing and booking hotels or homes with secure authentication and review systems.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Passport.js'],
    story: 'Implemented user dashboards, role-based authentication, and integrated a review & rating system for enhanced user trust.',
    link: 'https://github.com/Amarnath-sahni/HomeStay',
  },
   {
    title: 'IRCTC UI Redesign – Train Ticket Booking Platform',
    description: 'Redesigned the user interface of India’s IRCTC train booking system to improve usability and modernize the experience.',
    techStack: ['React.js', 'Vite', 'Tailwind CSS'],
    story: 'Enhanced responsiveness, reduced booking friction, and created a clean, intuitive UI for faster navigation and a seamless booking flow.',
    link: 'https://github.com/Amarnath-sahni/IRTC', // Add specific repo link if available
  },
];


const ProjectCard = ({ project, index, openModal }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.3 }}
    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
    onClick={() => openModal(project)}
  >
    <h3 className="text-2xl font-semibold text-yellow-400 mb-3">{project.title}</h3>
    <p className="text-gray-200 mb-3">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.techStack.map((tech, i) => (
        <span key={i} className="px-2 py-1 bg-black/70 text-white rounded-md text-sm shadow">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#020617] via-[#070b12] to-[#04060a] text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <p className="text-center text-yellow-300 max-w-2xl mx-auto mb-12">
         click on any card to explore detailed tech stack, project story, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} openModal={openModal} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="bg-[#0b1220] p-6 md:p-8 rounded-2xl w-full max-w-2xl shadow-2xl border border-white/10 overflow-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-bold text-yellow-400">{selectedProject.title}</h3>
                <button onClick={closeModal} className="p-2 rounded-md bg-white/10 hover:bg-white/20">
                  <FaTimes className="text-white" />
                </button>
              </div>
              <p className="text-gray-200 mb-4">{selectedProject.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-black/70 text-white rounded-md text-sm shadow">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-2">Project Story:</h4>
                <p className="text-gray-200">{selectedProject.story}</p>
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-500 hover:underline"
              >
                View Full Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}