import { useContext, useState } from 'react'
import { ColorModeContext } from '../../theme';
import { useTheme } from '@emotion/react';
import { Box, Container, IconButton, List, ListItemButton, ListItemText, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { DarkModeOutlined, ExpandLess, ExpandMore, LightModeOutlined } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const options = [
  'EN',
  'AR',
];

export default function Header1 ()
{
  // for dark mode 
  const colorMode = useContext( ColorModeContext );
  const theme = useTheme();

  // menu for chose lang
  const [ anchorEl, setAnchorEl ] = useState( null );
  const [ selectedIndex, setSelectedIndex ] = useState( 1 );
  const open = Boolean( anchorEl );
  
  const handleClickListItem = ( event ) =>
  {
    setAnchorEl( event.currentTarget );
  };

  const handleMenuItemClick = ( event, index ) =>
  {
    setSelectedIndex( index );
    setAnchorEl( null );
  };

  const handleClose = () =>
  {
    setAnchorEl( null );
  };

  // menu for chose lang

  return (
    <>
      <Box sx={ { background: '#2b3445', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' } }>
        <Container>
          <Stack flexDirection={ 'row' } alignItems={ 'center' }>
            <Typography variant="body2" sx={ { p: '3px 12px', mr: 2, background: '#d23f57', color: '#fff', fontSize: '10px', borderRadius: '12px' } } > Hot</Typography>
            <Typography variant="body2" flex={ 1 } sx={ { p: 1, color: '#fff', fontSize: '11px' } } > Free Express Shipping</Typography>
            {/* dark mood  */ }

            <div>
              { theme.palette.mode === "light" ? (
                <IconButton
                  onClick={ () =>
                  {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  } }
                  color="inherit"
                >
                  <LightModeOutlined sx={ { color: '#fff', fontSize: '16px' } } />
                </IconButton>
              ) : (
                <IconButton
                  onClick={ () =>
                  {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  } }
                  color="inherit"
                >
                  <DarkModeOutlined sx={ { fontSize: '16px' } } />
                </IconButton>
              ) }

            </div>
            {/* dark mood  */ }

            {/* choose lang  */ }
            <div>
              <List
                component="nav"
                aria-label="Device settings"
                sx={ { color: '#fff' } }
              >
                <ListItemButton
                  id="lock-button"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu"
                  aria-label="when device is locked"
                  aria-expanded={ open ? 'true' : undefined }
                  sx={ { padding: '0 10px' } }

                  onClick={ handleClickListItem }
                >
                  <ListItemText
                    sx={ { '.MuiTypography-root': { color: '#fff', fontSize: '11px', mr: '2px' } } }
                    secondary={ options[ selectedIndex ] }
                  />
                  { open ? <ExpandLess fontSize='16px' /> : <ExpandMore fontSize='16px' /> }

                </ListItemButton>
              </List>
              <Menu
                id="lock-menu"
                anchorEl={ anchorEl }
                open={ open }
                onClose={ handleClose }
                MenuListProps={ {
                  'aria-labelledby': 'lock-button',
                  role: 'listbox',
                } }
              >
                { options.map( ( option, index ) => (
                  <MenuItem
                    sx={ { fontSize: '11px', padding: '2px 5px', m: '3px 8px' } }
                    key={ option }
                    selected={ index === selectedIndex }
                    onClick={ ( event ) => handleMenuItemClick( event, index ) }
                  >
                    { option }
                  </MenuItem>
                ) ) }
              </Menu>
            </div>
            {/* choose lang  */ }

            {/* social icons  */ }
            <Box>
              <IconButton aria-label="X" sx={ { color: '#FFF', padding: 0 } }>
                <XIcon sx={ { fontSize: '16px' } } />

              </IconButton>
              <IconButton aria-label="facebook" sx={ { color: '#FFF', mx: 1, padding: 0 } }>
                <FacebookIcon sx={ { fontSize: '16px' } } />

              </IconButton>
              <IconButton aria-label="facebook" sx={ { color: '#FFF', padding: 0 } } >
                <InstagramIcon sx={ { fontSize: '16px' } } />

              </IconButton>

            </Box>
            {/* social icons  */ }

          </Stack>

        </Container>
      </Box>

    </>
  )
}
