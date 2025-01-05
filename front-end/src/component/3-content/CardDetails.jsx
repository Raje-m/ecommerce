/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Rating, Stack, Typography } from "@mui/material";
export default function CardDetails ( {cardData}  )
{
  return (

    <Stack alignItems={ 'center' } gap={ 2 } sx={ { flexDirection: { xs: 'column', sm: 'row' }, py: { xs: 2, sm: 0 } } } >
      <Box display={ "flex" }>
        <img width={ '300px' } height={ '100% !important' } src={ cardData.image }></img>
      </Box>
      <Box py={ 1 } sx={ { textAlign: { xs: 'center', sm: 'left' } } } >
        <Typography variant="h5">{cardData.title}</Typography>
        <Typography variant="h6">{cardData.category}</Typography>
        <Typography variant="body1" component={ 'p' }>{cardData.description}</Typography>
      
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
          <Typography variant="subtitle1" fontSize={ 22 } my={ '.4' } color="crimson" > price: {cardData.price}$</Typography>
          <Rating name="read-only" value={ cardData.rating.rate } precision={ 0.1 } readOnly  />

        </Box>
        <Box display={'flex'} alignItems={"center"} justifyContent={'center'} mt={5}>
          <Button variant="contained" size="small" sx={ { textAlign: 'center' } } >
            <AddShoppingCartOutlined fontSize="small" sx={ { pr: 1 } } />
            Buy Now
          </Button>
        </Box>

      </Box>
    </Stack>
  )
}
