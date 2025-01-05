/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Rating, Stack, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function CardDetails ( {cardData}  )
{
  return (

    <Stack alignItems={ 'center' } gap={ 2 } sx={ { flexDirection: { xs: 'column', sm: 'row' }, py: { xs: 2, sm: 0 } } } >
      <Box display={ "flex" }>
        {/* <img width={ '300px' } height={ '100%' } src={ `${ import.meta.env.VITE_BASE_URL }${ images[ 0 ].url }` }></img> */}
        <img width={ '300px' } height={ '100% !important' } src={ cardData.image }></img>
      </Box>
      <Box py={ 1 } sx={ { textAlign: { xs: 'center', sm: 'left' } } } >
        <Typography variant="h5">{cardData.title}</Typography>
        <Typography variant="h6">{cardData.category}</Typography>
        <Typography variant="body1" component={ 'p' }>{cardData.description}</Typography>
        {/* <Stack direction={ 'row' } alignItems={ "center" } sx={ { justifyContent: { xs: 'center', sm: "flex-start" } } } gap={ 1 } my={ 1 }>
          {images.map( ( ele, index ) =>
          {
            return <img width={ '90px' } height={ '100px' } style={ { borderRadius: '6px' } } key={ ele } src={ `${ import.meta.env.VITE_BASE_URL }${ ele.url }` } alt={ index } />
          } ) }

        </Stack> */}
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
