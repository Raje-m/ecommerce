import {  InputBase, List, ListItem, ListItemText, Menu, MenuItem, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
const Search = styled( 'div' )( ( { theme } ) => ( {
  position: 'relative',
  border: '1px solid #777',
  borderRadius: '22px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between', 
  minWidth: '300px',
  flex: .4,
  '&:hover': {
    borderColor: '#d23f57' 
  },
  marginRight: theme.spacing( 2 ),
  marginLeft: 0,
  width: '100%',
  [ theme.breakpoints.up( 'sm' ) ]: {
    marginLeft: theme.spacing( 3 ),
    width: 'auto',
  },
} ) );

const SearchIconWrapper = styled( 'div' )( ( { theme } ) => ( {
  padding: theme.spacing( 0, 2 ),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} ) );
const StyledInputBase = styled( InputBase )( ( { theme } ) => ( {
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing( 1, 1, 1, 0 ),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${ theme.spacing( 4 ) })`,
    transition: theme.transitions.create( 'width' ),
    width: '100%',
    // [ theme.breakpoints.up( 'md' ) ]: {
    //   width: '0ch',
    // },
  },
} ) );


// menu selected option 
const options = [
  'All Categories',
  'CAR',
  'Clothes',
  'Electronics',
];
// menu selected option 



export default function SearchBar ()
{
  const theme = useTheme()
  const [ anchorEl, setAnchorEl ] = useState( null );
  const [ selectedIndex, setSelectedIndex ] = useState( 0 );
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



  return (
    <Search >
      <SearchIconWrapper>
        <SearchIcon sx={ { color: '#777', fontSize: '18px' } } />
      </SearchIconWrapper >
      <StyledInputBase
        placeholder="Search…"
        inputProps={ { 'aria-label': 'search' } }
      />
      <div>
        <List

          component="nav"
          aria-label="Device settings"
          sx={ { bgcolor: theme.palette.myColor.main, borderTopRightRadius: '22px', borderBottomRightRadius: '22px', p: 0, display: 'flex', alignItems: 'center', flexDirection: 'row' } }
        >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={ open ? 'true' : undefined }
            sx={ { px:1,'&:hover': { cursor: 'pointer' } } }
            onClick={ handleClickListItem }
          >
            <ListItemText
              // primary="When device is locked"
              sx={ { ".MuiTypography-root": { fontSize: '12px' }, width: 80, textAlign: 'center', }}
              secondary={ options[ selectedIndex ] }
            />
            { open ? <ExpandLess /> : <ExpandMore /> }
          </ListItem>
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
              key={ option }
              selected={ index === selectedIndex }
              onClick={ (

              ) => handleMenuItemClick( event, index ) }
              sx={ { fontSize: '11px' } }

            >
              { option }

            </MenuItem>
          ) ) }
        </Menu>
      </div>
    </Search>
  )
}
