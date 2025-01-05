import { Box, Button, Container, ListItemIcon, ListItemText, Menu, MenuItem, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import WindowIcon from '@mui/icons-material/Window';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from "@emotion/react";
import ElectricBikeOutlinedIcon from '@mui/icons-material/ElectricBikeOutlined';
import DevicesIcon from '@mui/icons-material/Devices';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Header3Menu from "./Header3Menu";
import Header3Links from "./Header3Links";
export default function Header3 ()
{
  const [ anchorEl, setAnchorEl ] = useState( null );
  const open = Boolean( anchorEl );
  const handleClick = ( event ) =>
  {
    setAnchorEl( event.currentTarget );
  };
  const handleClose = () =>
  {
    setAnchorEl( null );
  };
  const theme=useTheme()
  return (
    <Container sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <Box  sx={ { width: 222, display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: theme.palette.myColor.main }}>
      
        <Button
          id="basic-button"
          aria-controls={ open ? 'basic-menu' : undefined }
          aria-haspopup="true"
          aria-expanded={ open ? 'true' : undefined }
          onClick={ handleClick }
          sx={ { color:theme.palette.text.secondary,width:'100%' }}
          >
          <WindowIcon sx={ { marginRight: 1, fontSize:16 }} />
          <Typography fontSize={14} p={0} textTransform={'capitalize'}>
            categories
          </Typography>
          <Box flexGrow={1}/>
          <ChevronRightIcon sx={ { fontSize: 16 } } />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={ anchorEl }
          
          open={ open }
          onClose={ handleClose }
          MenuListProps={ {
            'aria-labelledby': 'basic-button',
          } }
          sx={ { '.MuiPaper-root': { width: 222, background: theme.palette.myColor.main, boxShadow: '0', borderTopLeftRadius: '0', borderTopRightRadius: '0' }}}
        >
          <MenuItem>
            <ListItemIcon>
              <ElectricBikeOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <DevicesIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electonics</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <MenuBookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      { useMediaQuery( '(max-width:1200px)' ) ? ( <Header3Menu /> ) :
        ( <Box sx={{width:'100%', display:"flex",alignItems:'center' ,gap:2 ,justifyContent:'center'}}>
          <Header3Links title={'Home'}  />
          <Header3Links title={ 'Mega menu' }  />
          <Header3Links title={'full screen menu'}  />
          <Header3Links title={'pages'}  />
          <Header3Links title={'user account'}  />
          <Header3Links title={'vendor account'}  />
        </Box >
         ) }
  </Container>
  )
}
