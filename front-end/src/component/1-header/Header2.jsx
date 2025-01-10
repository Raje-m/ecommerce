import { Badge, Container, IconButton, Stack, styled, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Search from "./SearchBar";
export default function Header2 ()
{
  const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
  return (
    <Container sx={ { display: "flex", alignItems: "center",justifyContent:"space-between",my:2,flexDirection:{xs:'column',sm:'row'},gap:1 } }>
      <Stack alignItems={"center"} >
        <ShoppingCartOutlinedIcon sx={ { fontSize: '16px' } } />
        <Typography variant="body2">E-commercy</Typography>
      </Stack>
      <Search/>
      <Stack flexDirection={"row"}alignItems={"center"}>
        <IconButton aria-label="cart" >
          <StyledBadge badgeContent={ 4 } color="primary">
            <ShoppingCartIcon sx={{fontSize:'20px'}} />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <Person2OutlinedIcon fontSize="16px"/>
        </IconButton>
        
      </Stack>

    </Container>
  )
}
