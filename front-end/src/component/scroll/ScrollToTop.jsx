import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

export default function ScrollToTop ()
{
  const scrollToTop = () =>
  {
    window.scrollTo( {
      top: 0,
      behavior: 'smooth'
    } );
  };

  return (
    <Zoom in={ useScrollTrigger() }>
      <Fab onClick={ scrollToTop } size="small" variant="extended" color="primary"  aria-label="to-top" sx={{position:'fixed',bottom:'30px',right:'30px'}}>
        <KeyboardArrowUp />
      </Fab>
  </Zoom >
  );
}
