import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styles } from './style';
import { colors } from '../../theme/colors';


export default function Contact() {

  return (
    <section>
      <Container maxWidth="sm">
        <Box sx={styles.wrap}>
          <Box sx={styles.txthead}>
            <Typography variant="h4" component="h2" sx={styles.contact} gutterBottom={true}>Contact Us</Typography>
            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>
              We\'re here to answer your questions and discuss the decentralized future of the internet. Let\'s talk!','terms': 'I agree to the terms of use and privacy policy.
            </Typography>
          </Box>
          <Box>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" required fullWidth autoComplete="fname" name="firstName" id="firstName" label="First name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" required fullWidth name="lastName" id="lastName" label="Last name" autoComplete="lname" />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" required fullWidth name="email" id="email" label="Email address" autoComplete="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" required multiline rows={5} fullWidth autoComplete="message" name="message" id="message" label="Message" />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox name="terms" value="1" color="primary" />} label="I agree to the terms of use and privacy policy." />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button fullWidth variant="contained" color="primary"  sx={{backgroundColor:colors.main}}>
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}