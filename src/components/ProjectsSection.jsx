import { motion } from 'framer-motion'; 

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.3 } })
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'NomadQuest',
      description: 'NomadQuest is a travel destination web app that helps users explore, discover, and share beautiful places around the world. It features interactive maps, detailed destination pages, and user-generated reviews to enhance the travel planning experience',
      link: 'https://github.com/Amarnath-sahni/HomeStay', // Replace with actual project link
    },
    {
      title: 'E-Commerce',
      description: 'An e-commerce platform with key features like a Home page showcasing top products and offers, a Cart for easy shopping and checkout, an About Us section to introduce the brand, and a Feedback section for customer reviews and ratings to ensure a transparent and engaging shopping experience',
      link: 'https://github.com/Amarnath-sahni/E-commerce-Frontend', // Replace with actual project link
    },
    {
      title: 'Project 3',
      description: 'This is a description for Project 3. It is a data visualization tool built with D3.js.',
      link: '#', // Replace with actual project link
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            className="p-6 bg-white text-black shadow-2xl rounded-2xl border border-gray-300 hover:scale-105 transition-transform block"
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <span className="text-blue-500 hover:underline">View Project</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;