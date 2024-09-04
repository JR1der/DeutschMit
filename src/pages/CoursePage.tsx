import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import KoelnParallaxLayer from "../components/KoelnParallaxLayer.tsx";
import AccordionLayerCourses from "../components/AccordionLayerCourses.tsx";
import {Box, Typography} from "@mui/material";

const CoursePage = () => {
  return (
      <Parallax pages={4} style={{top: '80px', left: '0'}}>
        <KoelnParallaxLayer/>
        <AccordionLayerCourses/>
        <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              borderTop: '4px solid #AE0101',
              backgroundColor: "#FFCC01",
              display: "flex",
              justifyContent: "center",
              paddingTop: '40px',
              zIndex: 1,
            }}
        >
          <Box
              sx={{
                width: "80%",
                padding: "50px",
                textAlign: "center",
                color: "#AE0101",
              }}
          >
            <Typography variant="h4" sx={{fontWeight: "bold"}}>
              Lorem Ipsum is simply dummy text of.
            </Typography>
            <Typography variant="h6" sx={{marginTop: "20px", color:'#000000'}}>
              Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text
              of.
            </Typography>
          </Box>
        </ParallaxLayer>
      </Parallax>
  )
}

export default CoursePage;