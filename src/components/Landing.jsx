import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Cases');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-fuchsia-900 text-white py-16 text-center w-screen h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Financial Hub</h1>
      <p className="text-lg mb-6">Explore a world of personal finance, lending, asset tokenization, and AI-driven insights.</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow-400 text-blue-900 rounded-full py-3 px-6 font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:border-blue-300"
        onClick={handleGetStarted}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default Landing;
