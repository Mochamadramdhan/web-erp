import { Box } from '@mui/material'
import React from 'react'
import {ReactComponent  as ILMetrics } from '../../asset/ILMetrics.svg'
import { styles } from './style'

function About() {
  return (
  <Box sx={styles.wrap}>
    <ILMetrics/>
    <Box>
      <h1>
      Boost your business with smart inventory management.
      </h1>
      <p>
        Our innovative startup offers a user-friendly website that simplifies inventory management and profit tracking for busy entrepreneurs.
      </p>
     </Box>
  </Box>
  )
}

export default About