import './App.css';
import { Typography, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography sx={{ fontWeight: 'bold' }}>ABOUT</Typography>
        <Typography sx={{ fontWeight: 'bold' }}>PRICING</Typography>
        <Typography sx={{ fontWeight: 'bold' }}>CONTACT</Typography>
        <Button variant="contained">Contained</Button>
      </header>
      <div className='aaa'>
        <Typography>CONTACT</Typography>
      </div>
    </div>
  );
}

export default App;
