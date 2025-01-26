import { Badge, Container, IconButton, Stack, styled, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Search from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
export default function Header2 ()
{
  const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
  } ) );
  const eleToCart = useSelector( state => state.cartSlice.productInCart )
  const theme = useTheme()
  const navigate=useNavigate()
  return (
    <Container sx={ { display: "flex", alignItems: "center",justifyContent:"space-between",my:2,flexDirection:{xs:'column',sm:'row'},gap:1 } }>
    <Link to={'/'} style={{textDecoration:'none',color:theme.palette.text.secondary}}>
      <Stack alignItems={ "center" } >
        <ShoppingCartOutlinedIcon sx={ { fontSize: '16px' } } />
        <Typography variant="body2">E-commercy</Typography>
        </Stack>
      </Link>
      <Search/>
      <Stack flexDirection={"row"}alignItems={"center"}>
        <IconButton  aria-label="cart" onClick={()=>navigate('/cart')} >
          <StyledBadge badgeContent={ eleToCart?eleToCart.length:"" } color="primary">
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
