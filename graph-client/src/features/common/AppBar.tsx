import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const ButtonAppBar = () => {
  const navigate = useNavigate();
  const handleDogsClick = () => {
    navigate('dogs');
  };
  const handleCatFactsClick = () => {
    navigate('catfacts');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Bodil energy
          </Typography>
          <Button color='inherit' onClick={handleDogsClick}>
            Dogs
          </Button>
          <Button color='inherit' onClick={handleCatFactsClick}>
            Cat facts
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
