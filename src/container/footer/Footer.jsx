import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { styles } from './style';

export default function Footer() {
  const content = [
    {
      title: 'Address',
      desc: 'Jl Sukamulya 121, Bandung - Jawa Barat',
      icon: <RoomIcon color="primary" fontSize="small" />,
    },
    {
      title: 'Email',
      desc: 'contact@jae.com',
      icon: <EmailIcon color="primary" fontSize="small" />,
    },
    {
      title: 'Phone',
      desc: '0822222222',
      icon: <PhoneIcon color="primary" fontSize="small" />,
    },
  ];

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={2}>
          <Grid container spacing={5}>
            {content.map((item, index) => (
              <Grid key={index} item xs={4} sm={4} md={4}>
                <Box display="flex" sx={styles.foot} > 
                  <Avatar sx={styles.avatar} >{item.icon}</Avatar>
                  <Box >
                    <Typography variant="h6" gutterBottom={true} sx={styles.title}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2"  color="textSecondary">
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
