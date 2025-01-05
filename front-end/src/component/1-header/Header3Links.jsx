import { ArrowRight, ExpandMore } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Header3Links ({title})
{
  return (

      <nav aria-label="secondary mailbox folders">
        <List >
        <ListItem disablePadding sx={ { ':hover .mainlink': { display: 'block', transition: '.3s' }, position: 'relative',zIndex:9999 } }>
            <ListItemButton>
            <ListItemText primary={ title } sx={ { mr:'3px'}} />
              <ExpandMore />
            </ListItemButton>

            <Paper className=" mainlink" sx={ { display: "none", minWidth: 150, position: 'absolute', top: '100%', left: '50%', translate: '-50% 0' } }>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding >
                    <ListItemButton sx={ { p: 0, px: 1 } }>
                      <ListItemText primary="Dashboard" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={ { ':hover .sublink': { display: 'block', transition: '.3s' }, position: 'relative' } }>
                    <ListItemButton sx={ { p: 0, px: 1 } }>
                      <ListItemText primary="Products" />
                      <ArrowRight />
                    </ListItemButton>


                    <Paper className="sublink" sx={ { display: "none", minWidth: 150, position: 'absolute', top: 0, left: '100%',padding:'0 0 0 10px' } }>
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem disablePadding >
                            <ListItemButton sx={ { p: 0, px: 1 } }>
                              <ListItemText primary="Dashboard" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton sx={ { p: 0, px: 1 } }>
                              <ListItemText primary="Products" />
                              <ArrowRight />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton sx={ { p: 0, px: 1 } }>
                              <ListItemText primary="Orders" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton sx={ { p: 0, px: 1 } }>
                              <ListItemText primary="Profile" />

                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>



                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={ { p: 0, px: 1 } }>
                      <ListItemText primary="Orders" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={ { p: 0, px: 1 } }>
                      <ListItemText primary="Profile" />

                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Paper>
          </ListItem>
        </List>
      </nav>

  )
}
