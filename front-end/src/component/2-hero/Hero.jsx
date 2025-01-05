import { Box, Button, Container, Link, Stack, Typography, useMediaQuery } from '@mui/material'
import './hero.css'
import img0 from '../../img/banner-15.jpg'
import img00 from '../../img/banner-25.jpg'
import img1 from '../../img/banner-16.jpg'
import img2 from '../../img/banner-17.jpg'
import { ArrowRight } from '@mui/icons-material'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { useTheme } from '@emotion/react'
import IconSection from './IconSection'


export default function Hero ()
{
  const theme = useTheme()
  const smallScren = useMediaQuery( '(min-width:700px)' )
  const swipEle = [ { image: img0, title: 'MEN' }, { image: img00, title: 'WOMEN' } ]


  return (

  
      <Container sx={{pb:2}} >

        <Box sx={ { display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', mt: 1, py: 5, gap: 2, color: '#222', } } >
          <Box position={ 'relative' } sx={ { width: { lg: '71%', xs: '100%' } } } flex={ 1 } >
            <Swiper
              pagination={ {
                dynamicBullets: true,
              } }
              modules={ [ Pagination ] }
              className="mySwiper"
              loop={ true }

            >
              { swipEle.map( ele =>
              {
                return <SwiperSlide key={ ele.title }>
                  <Box position={ 'relative' } sx={ { ':hover': { cursor: 'grab' }, '&:active': { cursor: 'grabbing' } } } >
                    { smallScren && <img src={ ele.image } alt='1' /> }
                    <Box sx={ [ !smallScren ? { position: 'relative', textAlign: 'center', bgcolor: theme.palette.background.paper, color: theme.palette.text.primary,padding:'20px 0' } : { position: 'absolute', top: '100px', left: '50px', zIndex: 100 } ] }>
                      <Typography variant='body1' fontSize={ 20 } fontWeight={ 600 }>LIFESTILE COLLECTION</Typography>
                      <Typography variant='h3' my='3px' >{ ele.title }</Typography>
                      <Box display={ 'flex' } justifyContent={ 'center' } gap={ 1 } my={ '3px' } >
                        <Typography variant='h5'>SALE UP TO  </Typography>
                        <Typography variant='h5' color='#d23f57'> 30% OFF</Typography>

                      </Box>
                      <Typography variant='body2'>Get Free Shipping on orders over $99.00</Typography>
                      <Button variant='contained' sx={ { my: 4, bgcolor: '#1f2937',color:'#fff', transition: '.5s', ':hover': { opacity: '.8' } } }   >Shop Now</Button>
                    </Box>
                  </Box>
                </SwiperSlide>
              } ) }
            </Swiper>
          </Box>
          <Stack sx={ { width: { lg: '26.3%', xs: '100%' }, flexDirection: { sm: 'row', xs: 'column', lg: 'column' }, height: '100%', alignItems: 'center', justifyContent: 'space-evenly' } } >
            <Box sx={ { position: 'relative', borderRadius: '6px', overflow: 'hidden' } }>
              <img src={ img2 } alt='1111' width={ '100%' } height={ '100%' } />
              <Box sx={ { position: 'absolute', top: '20px', left: '15px',  } }>
                <Typography variant='caption1' sx={ { color: '#2b3445', fontSize: '18px' } }>NEW ARRIVALIS</Typography>
                <Typography variant='h6' sx={ { color: '#2b3445', lineHeight: '16px', mt: 1 } }>SUMMER</Typography>
                <Typography variant='h5'>SALE 20% OFF</Typography>
                <Link href='#' sx={ { display: 'flex', alignItems: 'center', mt: 2, textDecoration: 'none', color: '#222', transition: '0.5s', '&:hover': { color: '#d23f57' } } }>

                  <Typography fontSize={ 12 } >Shop Now</Typography>
                  <ArrowRight />
                </Link>
              </Box>
            </Box>
            <Box sx={ { position: 'relative' } }>
              <img src={ img1 } alt='12' width={ '100%' } height={ '100%' } />
              <Box sx={ { position: 'absolute', top: '20px', left: '15px', } }>
                <Typography variant='body1'>GAMING 4K</Typography>
                <Typography variant='h5'>DESKTOP &</Typography>
                <Typography variant='h5'>LAPTOPS</Typography>
                <Link href='#' sx={ { display: 'flex', alignItems: 'center', mt: 2, textDecoration: 'none', color: '#222', transition: '0.5s', '&:hover': { color: '#d23f57' } } }>
                  <Typography fontSize={ 12 } >Shop Now</Typography>
                  <ArrowRight />
                </Link>
              </Box>
            </Box>
          </Stack >
        </Box>
        <IconSection/>
      </Container>
  )
}
