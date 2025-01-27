import { Home, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, Fab, styled, Tooltip,} from '@mui/material'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export default function GoTo ({to})
{
  const StyledBadge = styled( Badge )( ( { theme } ) => ( {
    '& .MuiBadge-badge': {
      right: -3,
      top: 2,
      border: `2px solid ${ theme.palette.background.paper }`,
      padding: '0 4px',
    },
  } ) );
  const eleToCart = useSelector( state => state.cartSlice.productInCart )

  const navigate=useNavigate()
  return (
          <Tooltip title={to===''?'Go To Home':'Go To Cart'} placement="top">
    
    <Fab onClick={ () => navigate( `/${to}` ) } size="small" variant="extended" color="primary" aria-label="to" sx={ { position: 'fixed', bottom: '58px', left: '30px', } }>
          { to === '' ? <Home fontSize='small' /> : <StyledBadge badgeContent={ eleToCart ? eleToCart.length : "" } color="error"> <ShoppingCartOutlined fontSize='small' /></StyledBadge>}
      </Fab>
      </Tooltip>
  )
}