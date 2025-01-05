import { useTheme } from "@emotion/react";
import { AccessAlarmOutlined, CreditScoreOutlined, ElectricBolt, WorkspacePremiumOutlined } from "@mui/icons-material";
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";

export default function IconSection ()
{
  // const matches = useMediaQuery( '(max-width:600px)' );
  const theme =useTheme()
  return (
  
    <Stack flexDirection={ "row" } alignItems={ "center" }  flexGrow={ 1 } flexWrap={ 'wrap' }   divider={ <Divider orientation={"vertical"} flexItem /> }  bgcolor={theme.palette.background.paper} >
      <IconsBox icon={ <AccessAlarmOutlined /> } title={'Fast Delivery'} subTitle={'start from 10$'}/>
      <IconsBox icon={ <CreditScoreOutlined /> } title={ 'Money Guarantee' } subTitle={'7 Days Back'}/>
      <IconsBox icon={ <ElectricBolt /> } title={ '365 Days' } subTitle={'For free return'}/>
      <IconsBox icon={ <WorkspacePremiumOutlined /> } title={ 'Payment' } subTitle={'Secure system'}/>
      </Stack >
  
  )
}

""



// eslint-disable-next-line react/prop-types
function IconsBox ( { icon, title, subTitle } )
{
  const theme = useTheme()
  // const matches = useMediaQuery( '(max-width:500px)' );

  return (
    <Box width={'250px'} display={"flex"} textAlign={'center'}  sx={{flexDirection:{xs:'column',sm:'row'}}}  p={'10px 15px'} alignItems={'center'} justifyContent={'center'} flexGrow={1}  gap={2}>
      { icon }

      <Box >
        <Typography variant="body1" mb={1.5}>{title}</Typography>
        <Typography variant="body2" fontWeight={ 300 } color={ theme.palette.text.secondary } >{subTitle}</Typography>
    </Box>
    </Box>
  )
}

