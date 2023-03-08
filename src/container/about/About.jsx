import { Box, Typography } from '@mui/material'
import React from 'react'
import {ReactComponent  as ILMetrics } from '../../asset/ILMetrics.svg'
import { styles } from './style'

function About() {
  return (
  <Box sx={styles.wrap}>
    <Box sx={styles.il}>
      <ILMetrics width={"100%"} height={"100%"}/>
    </Box>
    <Box sx={styles.wrapabout}>
      <Typography  sx={styles.title}>
        Boost your business with smart inventory management.
      </Typography>
      <Typography variant="subtitle1" sx={styles.desc}>
        Our startup offers a user-friendly website that streamlines inventory management and profit tracking for busy entrepreneurs. With our platform, you can easily track stock levels, set up reorder alerts, and generate comprehensive sales and profit reports. Say goodbye to spreadsheets and hello to stress-free inventory management with our intuitive website.
      </Typography>
     </Box>
  </Box>
  )
}

export default About