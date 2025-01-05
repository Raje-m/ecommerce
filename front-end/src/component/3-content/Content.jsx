import { useTheme } from '@emotion/react';
import { AddShoppingCartOutlined, Close } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, Container, Dialog, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import CardDetails from './CardDetails';
import { useGetProductByNameQuery } from '../../redux/fetchProducts';

export default function Content ()
{
  // const allProduct = 'products?populate=*'
  // const menProduct = `products?populate=*&[filters][category][$eq]=men`
  // const womenProduct = `products?populate=*&[filters][category][$eq]=women`
  const jeweleryProduct = `/category/jewelery`
  const allProduct = ''
  const electronicsProduct = `/category/electronics`
  const womenProduct = `/category/women's clothing`
  const menProduct = `/category/men's clothing`

  const [ category, setCategory ] = useState( '' );
  const { data, error, isLoading } = useGetProductByNameQuery( category )
  if ( error )
  {
    console.log( error );
  }
  if ( data )
  {
    console.log( data );


  }
  const [ isOpen, setIsOpen ] = useState( false )
  const [ itemSelect, setItemSelect ] = useState( {} )
  const theme = useTheme()

  const handleAlignment = ( event, tapClicked ) =>
  {
    if ( tapClicked !== null )
    {
      setCategory( tapClicked );
      // setAlignment( newAlignment );
    }

  };
  const handleClose = () =>
  {
    setIsOpen( false )
  };
  const descAfterHideSomeText = ( d ) =>
  {
    let descAfter = d.split( " " )
    descAfter = descAfter.length > 19 ? descAfter.slice( 0, 20 ) : descAfter
    console.log( descAfter );

    return descAfter.join( ' ' )
  }

  return (
    <Container sx={ { py: 7 } }>
      <Stack sx={ { flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, textAlign: { xs: 'center', md: 'initial' } } } alignItems={ 'center' } flexWrap={ 'wrap' } gap={ 2 }  >
        <Box>
          <Typography variant='h6'>Selected Products</Typography>
          <Typography variant='body1' fontWeight={ 300 }>All our new arrivalis in a exclusive brand selection</Typography>
        </Box>
        <ToggleButtonGroup
          color={ 'error' }
          value={ category }
          exclusive
          onChange={ handleAlignment }
          aria-label="text alignment"
        >
          <ToggleButton className='toggleEle' value={ allProduct } sx={ { color: theme.palette.text.primary } } aria-label="left aligned" >
            All Products
          </ToggleButton>
          <ToggleButton className='toggleEle' value={ electronicsProduct } sx={ { mx: '10px !important', color: theme.palette.text.primary } } aria-label="centered">
            Electronics Category
          </ToggleButton>

          <ToggleButton className='toggleEle' value={ jeweleryProduct } sx={ { mr: '10px !important', color: theme.palette.text.primary } } aria-label="centered">
            Jewelery Category
          </ToggleButton>
          <ToggleButton className='toggleEle' value={ womenProduct } sx={ { mr: '10px !important', color: theme.palette.text.primary } } aria-label="right aligned">
            Women Category
          </ToggleButton>
          <ToggleButton className='toggleEle' value={ menProduct } sx={ { color: theme.palette.text.primary } } aria-label="right aligned">
            Men Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction={ 'row' } gap={ 2 } alignItems={ 'center' } flexWrap={ 'wrap' } flexGrow={ 1 } justifyContent={ 'space-around' } my={ 5 }  >
        { isLoading ? (
          <Typography variant={ 'h1' }>***************************
            <br />
            <br />
            <br />
            <br />
            <br />
            #####################################
          </Typography>
        ) : data && data.map( ele =>
        {
          return (
            <Card key={ ele.id } sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto', maxWidth: 333, maxHeight: '550px', minHeight: '550px', transition: 'all .9s', ':hover .cardImg': { scale: '1.1', rotate: '5deg', transition: '.5s' } } }>
              {/* <CardMedia

                component="img"
                alt="green iguana"
                height="277"
                image={ ele.image }
                
              /> */}
              <Box display={ 'flex' } alignItems={ 'center' } justifyContent={ 'center' } p={ 1 }>
                <img className='cardImg' height={ '277px' } width={ '100%' } src={ ele.image } />
              </Box>

              <CardContent   >
                {/* <Stack alignItems={'center'} justifyContent={'space-between'}> */ }

                <Stack direction={ 'row' } alignItems={ 'center' } justifyContent={ 'space-between' }>
                  <Typography variant="h6" lineHeight={ 1.1 } component="div">
                    { ele.title }
                  </Typography>
                  <Typography variant='subtitle1' component={ 'p' }>
                    { ele.price }$
                  </Typography>

                </Stack>
                <Tooltip title={ ele.description }>
                  <Typography variant="body2" sx={ { color: 'text.secondary' } }>
                    { descAfterHideSomeText( ele.description ) }
                  </Typography>
                </ Tooltip >
                <Typography flexGrow={ 1 }></Typography>

                {/* </Stack> */ }

              </CardContent>
              <CardActions sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
                <Button size="medium" onClick={ () => { setIsOpen( true ), setItemSelect( ele ) } }><AddShoppingCartOutlined fontSize='small' sx={ { mr: 1 } } /> Add To Cart</Button>
                <Rating name="read-only" value={ ele.rating.rate } precision={ 0.1 } readOnly />

              </CardActions>
            </Card>


          )

        } ) }

      </Stack>


      {/* dialog for product Details  */ }
      <Dialog onClose={ handleClose } open={ isOpen } sx={ { zIndex: 999, '.MuiPaper-root': { minWidth: { sx: '100%', md: '800px', position: "relative" } } } }>
        <IconButton onClick={ handleClose } sx={ { position: 'absolute', top: 0, right: 8, "&:hover": { color: 'red', rotate: '40deg', transition: '.3s ' } } } >
          <Close />
        </IconButton>

        <CardDetails cardData={ itemSelect } />


      </Dialog>
      {/* dialog for product Details  */ }
    </Container>
  )
}




