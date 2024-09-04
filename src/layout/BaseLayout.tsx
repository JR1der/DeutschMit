import React from "react";
import {Box} from "@mui/material";
import NavBar from "./NavBar.tsx";
import {Page} from "./Page.tsx";
import Footer from "./Footer.tsx";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
      <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <NavBar/>
        <Page>{children}</Page>
        <Footer/>
      </Box>
  )
}

export default BaseLayout;