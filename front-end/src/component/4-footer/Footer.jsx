import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box bgcolor={ '#2b3445' } py={ 1.3 } sx={ { borderTopLeftRadius: 8, borderTopRightRadius: 8 } }>
      <Typography sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'HighlightText', fontSize: '16px' } } variant="h6">
        Designed And Developed By
        <Button sx={ { fontSize: '38', textTransform: 'capitalize', mx: .5, color: '#ff7798' } }>Raje Marae</Button>
        @2024

      </Typography>
      
  </Box>
  )
}
