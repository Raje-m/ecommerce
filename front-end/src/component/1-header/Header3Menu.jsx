// import React from 'react'
// import { useTheme } from '@emotion/react';
import { Close, ExpandMore } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

import { Accordion, AccordionSummary, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, } from "@mui/material";
import { useState } from 'react';

export default function Header3Menu ()
{
  // const theme = useTheme()
  const [ state, setState ] = useState( false );

  const toggleDrawer = ( open ) => ( event ) =>
  {
    if ( event.type === 'keydown' && ( event.key === 'Tab' || event.key === 'Shift' ) )
    {
      return;
    }

    setState( open );
  };

  return (

    <>
      <IconButton onClick={ toggleDrawer( true ) }>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={ 'top' }
        open={ state }
        onClose={ toggleDrawer( false ) }
        sx={ { '.css-k1yagv-MuiPaper-root-MuiDrawer-paper': { height: '100%' } } }
      >
        <Box sx={ { width: '444px', m: '50px auto', position: 'relative', py: 5 } }>
          <IconButton  onClick={ toggleDrawer( false ) } sx={ { position: 'absolute', top: 0, right: 8 ,"&:hover":{color:'red',rotate:'40deg',transition:'.3s '}} } >
            <Close />
          </IconButton>



          { [ { mainTitle: 'Home', subTitle: [ 'Link1', 'Link2', 'Link3' ] },
          { mainTitle: 'Mega menu', subTitle: [ 'Link1', 'Link2', 'Link3' ] },
          { mainTitle: 'full screen menu', subTitle: [ 'Link1', 'Link2', 'Link3' ] },
          { mainTitle: 'pages', subTitle: [ 'Link1', 'Link2', 'Link3' ] },
          { mainTitle: 'user account', subTitle: [ 'Link1', 'Link2', 'Link3' ] },
          { mainTitle: 'vendor account', subTitle: [ 'Link1', 'Link2', 'Link3' ] } ].map( ele =>
          {
            return (
              <Accordion key={ ele.mainTitle } elevation={ 0 } sx={ { background: 'initial' } } >
                <AccordionSummary
                  sx={ { my: 0, py: 0 } }
                  expandIcon={ <ExpandMore /> }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {ele.mainTitle}
                </AccordionSummary>


                {/* <AccordionDetails> */ }
                <nav aria-label="secondary mailbox folders">
                <List sx={ { my: 0, py: 0 } }>
                  { ele.subTitle.map( ele =>
                  {
                    return (
                      <ListItem key={ele} sx={ { my: 0, py: 0 } }>
                        <ListItemButton>
                          <ListItemText primary={ ele } />
                        </ListItemButton>
                      </ListItem>
                    )
                  })}
                  
                </List>
                </nav> 
                {/* </AccordionDetails> */ }
              </Accordion>
            )
          } ) }

        </Box>
        {/* { list( 'top' ) } */ }
      </Drawer>
    </>
  )
}
