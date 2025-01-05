import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

export default function LinerProgress ()
{
  return (
    <Container sx={ { position: 'relative' } } >
      <Box sx={ { display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: '50%', left: '50%',zIndex:999, transform:'-50% -50%' } }>
        <CircularProgress sx={{width:'35px',height:'35px'}} />
      </Box>

    </Container>
  );
}