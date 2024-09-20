import React from 'react';
import { Typography, Link, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LeetCodeIcon from './Leetcode'; // Assuming this is your custom LeetCode icon component

const Contact = () => {
  return (
    <section id="contact" className="py-10" style={{ backgroundColor: '#282c34', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ color: '#fff' }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {/** Contact Items */}
            <Grid item xs={12} sm={4}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={{
                  padding: '10px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#3f51b5',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                <PhoneIcon sx={{ color: '#fff' }} />
                <Typography variant="body1" sx={{ color: '#fff' }}>
                  <Link
                    href="tel:+919381754792"
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: '#E7A41F',
                      },
                    }}
                  >
                    +91 9381754792
                  </Link>
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={{
                  padding: '10px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#3f51b5',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                <EmailIcon sx={{ color: '#fff' }} />
                <Typography variant="body1" sx={{ color: '#fff' }}>
                  <Link
                    href="mailto:2200032850cseh@gmail.com"
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: '#E7A41F',
                      },
                    }}
                  >
                    2200032850cseh@gmail.com
                  </Link>
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={{
                  padding: '10px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#3f51b5',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                <LinkedInIcon sx={{ color: '#fff' }} />
                <Typography variant="body1" sx={{ color: '#fff' }}>
                  <Link
                    href="https://www.linkedin.com/in/bikki-luther-paul"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: '#E7A41F',
                      },
                    }}
                  >
                    @Bikki Luther Paul
                  </Link>
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={{
                  padding: '10px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#3f51b5',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                <CodeIcon sx={{ color: '#fff' }} />
                <Typography variant="body1" sx={{ color: '#fff' }}>
                  <Link
                    href="https://www.codechef.com/users/kl_2200032850"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: '#E7A41F',
                      },
                    }}
                  >
                    @kl_2200032850
                  </Link>
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={{
                  padding: '10px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#3f51b5',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                <LeetCodeIcon sx={{ color: "#E7A41F" }} />
                <Typography variant="body1" sx={{ color: '#fff' }}>
                  <Link
                    href="https://leetcode.com/u/klu_2200032850/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: '#E7A41F',
                      },
                    }}
                  >
                    @klu_2200032850
                  </Link>
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={{
                  padding: '10px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#3f51b5',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                <LocationOnIcon sx={{ color: '#fff' }} />
                <Typography variant="body1" sx={{ color: '#fff' }}>
                  Nellipaka, Andhra Pradesh, India
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
