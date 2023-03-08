import { Typography, Button, AppBar, Toolbar,Box} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { colors } from '../../theme/colors';
import { styles } from './style';
import Login from '../login/Login';

const menuItems = [
  { id: 1, label: 'About' },
  { id: 2, label: 'Price' },
  { id: 3, label: 'Contact' },
];
function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar style={styles.wrap} 
      sx={{height: scrolled ? '7%' : '12%',  
      boxShadow: scrolled ? '0 2px 2px 1px rgba(1,1,1,0.09)' : 'none',}}
    >
        <Toolbar style={styles.toolbar}>
          <Typography style={styles.typlg} variant='h4'>Jae'</Typography>
          <Box sx={styles.wrapmenu}>
          {menuItems.map((item) => (
            <Typography key={item.id}>
              <span
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                style={{
                  color: hoveredItem === item.label ? colors.main : colors.texs,
                  cursor: 'pointer',
                  fontFamily: colors.fontmain,
                  fontSize: {
                    xs: "24px",
                    md: "30px",
                  },
                  fontWeight: hoveredItem === item.label ? 'bold' : 'normal',
                }}
              >
                {item.label}
              </span>
            </Typography>
          ))}
            <Button variant='outlined' sx={styles.button} onClick={handleOpen}>
              Login
            </Button>
            <Login open={open} handleClose={handleClose}/>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Header;

