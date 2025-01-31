import { Box, Button, Container, Paper, Stack, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, delFromCart } from "../redux/cartSlice";
import GoTo from "./GoTo";
import { Navigate, useNavigate } from "react-router-dom";

// styled table 
const StyledTableCell = styled( TableCell )( ( { theme } ) => ( {
  [ `&.${ tableCellClasses.head }` ]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [ `&.${ tableCellClasses.body }` ]: {
    fontSize: 14,
  },
} ) );

const StyledTableRow = styled( TableRow )( ( { theme } ) => ( {
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
} ) );

export default function Cart ()
{
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const eleToCart = useSelector( state => state.cartSlice.productInCart )
  const totalPrice = eleToCart.reduce( ( acc, ele ) =>
  {
    return acc + ele.price * ele.quantity
  }, 0 )

  return (
    <Container sx={ { py: 5, minHeight: '67vh' } } >
      <Typography textAlign={ 'center' } p={ 1 } variant="h3">Welcome to Cart</Typography>
      <Box display={ 'flex' } alignItems={ 'center' } justifyContent={ 'space-between' } py={ 2 }>
        <Typography>Total price :{ totalPrice.toFixed( 2 ) } $</Typography>
        <Button variant="contained" color="error" size="small" onClick={ () => dispatch( clearAll() ) } >Clear Cart</Button>
      </Box>
      { eleToCart.length === 0 ? <Stack  alignItems={'center'} justifyContent={'center'} border={'1px solid '} borderRadius={'15px'} >
        <h2>The cart is empty</h2>
        <h4>To chose products go to <Button variant="contained" size="small" onClick={()=>navigate('/')}>Home</Button></h4>
      </Stack> :
        <TableContainer component={ Paper } sx={ { my: 2 } }>
          <Table sx={ { minWidth: 700 } } aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">Title</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { eleToCart && eleToCart.map( ( row ) => (
                <StyledTableRow key={ row.id }>
                  <StyledTableCell component="th" scope="row">
                    { row.id }
                  </StyledTableCell>
                  <StyledTableCell align="center"><img src={ row.image } style={ { width: '100px' } } /> </StyledTableCell>
                  <StyledTableCell align="center">{ row.title }</StyledTableCell>
                  <StyledTableCell align="center">{ row.price } $</StyledTableCell>
                  <StyledTableCell align="center">{ row.quantity }</StyledTableCell>
                  <StyledTableCell align="center"><Button variant="contained" size="small" color="error" onClick={ () => dispatch( delFromCart( row ) ) } >Del</Button></StyledTableCell>
                </StyledTableRow>
              ) ) }
            </TableBody>
          </Table>
        </TableContainer>
      }
      <GoTo to={ '' } />
    </Container>
  )
}
