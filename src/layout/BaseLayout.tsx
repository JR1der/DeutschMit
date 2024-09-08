import React from "react";
import {Box} from "@mui/material";
import NavBar from "./NavBar.tsx";
import {Page} from "./Page.tsx";
import Footer from "./Footer.tsx";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
      <Box className='flex flex-col min-h-screen'>
        <NavBar/>
        <Page>{children}</Page>
        <Footer/>
      </Box>
  )
}

export default BaseLayout;