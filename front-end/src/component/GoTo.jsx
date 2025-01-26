import { Home, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material'
import { Fab, Tooltip,} from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function GoTo ({to})
{
  const navigate=useNavigate()
  return (
          <Tooltip title={to===''?'Go To Home':'Go To Cart'} placement="top">
    
    <Fab onClick={ () => navigate( `/${to}` ) } size="small" variant="extended" color="primary" aria-label="to" sx={ { position: 'fixed', bottom: '58px', left: '30px', } }>
      { to === '' ? <Home fontSize='small' /> : <ShoppingCartOutlined fontSize='small' />}
      </Fab>
      </Tooltip>
  )
}