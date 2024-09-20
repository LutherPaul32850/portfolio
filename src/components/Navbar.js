import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-gray-800">
      <Toolbar className="container mx-auto flex justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h6" component="div" className="text-white">
            My Portfolio
          </Typography>
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }}>
          <div className="space-x-4">
            <Button color="inherit" href="#hero">Home</Button>
            <Button color="inherit" href="#about">About</Button>
            <Button color="inherit" href="#experience">Experiences</Button>
            <Button color="inherit" href="#projects">Projects</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </div>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
