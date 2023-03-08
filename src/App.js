import './App.css';
import { Typography, Button, AppBar, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { colors } from './theme/colors';

const menuItems = [
  { id: 1, label: 'ABOUT' },
  { id: 2, label: 'PRICE' },
  { id: 3, label: 'CONTACT' },
];

function App() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="App">
      <AppBar position="fixed" sx={{ backgroundColor: colors.backroud1 }} component="nav">
        <Toolbar sx={{ gap: '10%', justifyContent: 'center' }}>
          {menuItems.map((item) => (
            <Typography key={item.id}>
              <span
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                style={{
                  color: hoveredItem === item.label ? colors.main : colors.teks,
                  cursor: 'pointer',
                  fontWeight: hoveredItem === item.label ? 'bold' : 'normal',
                }}
              >
                {item.label}
              </span>
            </Typography>
          ))}
          <Button
            variant="outlined"
            sx={{ paddingX: 5, fontWeight: 'bold', color: colors.main, borderColor: colors.main }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div className="aaa">
        <Typography>CONTACT</Typography>
      </div>
    </div>
  );
}

export default App;
