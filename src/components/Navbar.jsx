import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full p-4 backdrop-blur-lg bg-white/80 shadow-lg transition-transform ${show ? 'translate-y-0' : '-translate-y-full'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <h1 className="text-2xl font-extrabold text-gray-900">My Portfolio</h1>
        <ul className="flex space-x-6 text-lg font-medium text-gray-700">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
          <li className="hover:text-gray-900 cursor-pointer">About</li>
          <li className="hover:text-gray-900 cursor-pointer">Projects</li>
          <li className="hover:text-gray-900 cursor-pointer">Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;