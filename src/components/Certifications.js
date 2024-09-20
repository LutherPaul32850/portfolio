import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: 'May 2024',
    description: 'Certification that validates the ability to design and implement scalable and secure applications on AWS.',
    image: 'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    link: 'https://www.credly.com/badges/81b1198a-5653-4524-ac2b-d0722c5f1984/public_url'
  },
  // Add more certifications as needed
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Certifications
            </motion.h2>
            <Grid container spacing={4}>
              {certifications.map((cert, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.05 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card className="shadow-md">
                      <CardActionArea href={cert.link} target="_blank" rel="noopener noreferrer">
                        <CardMedia
                          component="img"
                          height="150"
                          image={cert.image}
                          alt={cert.title}
                        />
                        <CardContent>
                          <Typography variant="h5" component="div" className="mb-2">
                            {cert.title}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary" className="mb-2">
                            {cert.organization} - {cert.date}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {cert.description}
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

export default Certifications;
