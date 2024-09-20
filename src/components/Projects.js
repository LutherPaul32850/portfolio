import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Supply Chain Management',
    description: 'A Django-based shopping portal for shopping and checkout.',
    link: '#',
  },
  {
    title: 'Student Counselling Management System',
    description: 'A MERN stack-based project that provides an overall performance of a student to their counsellor.',
    link: '#',
  },
  {
    title: 'OnlineProf',
    description: 'A Springboot-based project that facilitates online mentorship and coaching.',
    link: '#',
  },
  // Add more projects as needed
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ scale: 1.05 }}
    style={{ height: '100%' }}
  >
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 4, flexGrow: 1 }}>
          {project.description}
        </Typography>
        <Box sx={{ mt: 'auto' }}>
          <Button variant="contained" color="primary" href={project.link}>
            View Project
          </Button>
        </Box>
      </CardContent>
    </Card>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
