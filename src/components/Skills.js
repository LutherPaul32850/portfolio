import React from 'react';
import { Card, CardContent, Typography, Grid, LinearProgress, Box } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90, color: '#3f51b5' },  // Primary color (Blue)
  { name: 'JavaScript', level: 90, color: '#ff9800' },  // Complementary color (Orange)
  { name: 'HTML/CSS', level: 95, color: '#4caf50' },  // Complementary color (Green)
  { name: 'Spring/Spring Boot', level: 90, color: '#9c27b0' },
  { name: 'SQL', level: 85, color: '#009688' },  // Complementary color (Purple)
  { name: 'Node.js', level: 75, color: '#00bcd4' },  // Complementary color (Cyan)
  { name: 'Python', level: 70, color: '#ff5722' },  // Complementary color (Deep Orange)
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <Card sx={{ minHeight: '120px', backgroundColor: skill.color, color: '#fff' }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 'bold' }}>
          {skill.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LinearProgress
            variant="determinate"
            value={skill.level}
            sx={{
              flexGrow: 1,
              height: '8px',
              borderRadius: '5px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)', // Subtle white for contrast
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#fff', // White progress bar to stand out on colored background
              },
            }}
          />
          <Typography variant="body2" sx={{ ml: 2, fontWeight: 'bold' }}>
            {skill.level}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
      <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>    
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SkillCard skill={skill} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
