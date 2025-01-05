import { ThemeProvider } from "@emotion/react";
import Header1 from "./component/1-header/Header1";
import Header2 from "./component/1-header/Header2";
import Header3 from "./component/1-header/Header3";
import Hero from "./component/2-hero/Hero";
import Content from "./component/3-content/Content";
import Footer from "./component/4-footer/Footer";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline } from "@mui/material";
import ScrollToTop from "./component/scroll/ScrollToTop";


function App ()
{

  const [ theme, colorMode ] = useMode();
  return (

    <ColorModeContext.Provider value={ colorMode }>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <  Box sx={ { background: theme.palette.bg.main } }>
          <Hero />
          <Content />
        </  Box >
        <Footer />
        <ScrollToTop />
      
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export default App
