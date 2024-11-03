import React from 'react';
import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const bubbles = Array.from({ length: 10 }); // Number of bubbles

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #4a90e2, #00d4ff)', // Soft blue gradient background
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* Animated Bubbles */}
      {bubbles.map((_, index) => (
        <motion.div
          key={index}
          className="bubble"
          style={{
            position: 'absolute',
            width: `${Math.random() * 80 + 20}px`,
            height: `${Math.random() * 80 + 20}px`,
            borderRadius: '50%',
            backgroundColor: `rgba(255, 255, 255, ${Math.random()})`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.6,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, 200, -200, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Hero Content */}
      <Box zIndex={1} maxWidth="600px">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: '#fff', fontWeight: 'bold', fontSize: '3.5rem', marginBottom: '1rem' }}
        >
          Hello, I'm Luther
        </motion.h1>

        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '2rem' }}
        >
          A Web Developer specializing in creating interactive digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="projects" smooth={true} duration={800}>
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: '25px',
                background: 'linear-gradient(135deg, #0077b6, #00b4d8)', // Gradient background
                color: '#fff',
                boxShadow: '0px 4px 20px rgba(0, 183, 255, 0.5)', // Soft glow
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)', // Slight scale-up on hover
                  boxShadow: '0px 6px 30px rgba(0, 183, 255, 0.7)', // Brighter glow
                },
                '&:active': {
                  transform: 'scale(0.95)', // Slight shrink on click
                },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent 60%)',
                  transform: 'scale(0)',
                  transition: 'transform 0.5s ease',
                },
                '&:hover::before': {
                  transform: 'scale(1)', // Subtle pulse effect on hover
                },
              }}
            >
              Let's get started!
            </Button>
          </Link>
        </motion.div>
      </Box>
    </section>
  );
};

export default Hero;
