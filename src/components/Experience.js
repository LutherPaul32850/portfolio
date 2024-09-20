import React from 'react';
import { Card, CardContent, Typography, Grid, CardActionArea} from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Java Full Stack Developer Intern',
    company: 'AICTE',
    duration: 'June 2021 - Present',
    description: 'Acquired practical knowledge in essential technologies like HTML, CSS, JavaScript, Bootstrap, Hibernate, MySQL, Spring, Spring Boot, and Git.',
    link: "https://drive.google.com/file/d/1QgBiMirr2ZeYQ49e2S8lhDdc4nUHK22d/view?usp=sharing",
  },
  {
    title: 'Cyber Security Intern',
    company: 'Cyber Dosti',
    duration: 'May 2024 - July 2024',
    description: 'Focused on implementations and modern practices used in Cyber Attacks and Prevention/Forensic practices.',
    link: "https://drive.google.com/file/d/1QYUKY_HDWZ_kAlICnTqiT4Zt49uRtdBk/view?usp=sharing",
  },
  {
    title: 'Cloud Intern',
    company: 'AICTE',
    duration: 'January 2024 - March 2024',
    description: 'Gained hands-on experience in deploying web applications on cloud, maintaining instances, cloud databases, migrating from on-premises to cloud through AWS Cloud.',
    link: "https://drive.google.com/file/d/10fiUFmCgt0cdDUe5epa1sxWt8TgGUvJc/view?usp=sharing",
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h2>
        <Grid container spacing={4}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.02 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="shadow-md" sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardActionArea href={experience.link} target="_blank" rel="noopener noreferrer">
                  <CardContent>
                    <Typography variant="h5" component="div" className="mb-2">
                      {experience.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className="mb-1">
                      {experience.company}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" className="mb-2">
                      {experience.duration}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {experience.description}
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Experience;
