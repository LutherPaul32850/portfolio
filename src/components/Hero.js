import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="bg-blue-600 h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm Luther
      </motion.h1>
      <motion.p
        className="text-lg text-white mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A Web Developer specializing in creating interactive digital experiences.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <br/>
        <Button variant="contained" color="primary" className="mt-8" href="#projects">
          Let's get started!
        </Button>
      </motion.div>
    </section>
  );
}

export default Hero;
