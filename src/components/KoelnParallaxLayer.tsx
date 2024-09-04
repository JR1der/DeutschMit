import {ParallaxLayer} from "@react-spring/parallax";
import koelnSkyImage from "../img/KoelnSky.png";
import {Box, Typography} from "@mui/material";
import koelnCityImage from "../img/KoelnCity.png";
import Shapes from "../img/Shapes.png";
import logoImage from "../img/DeutschMitLogTransparent.png";

const KoelnParallaxLayer = () => {
  return (
      <>
        <ParallaxLayer offset={0} speed={0} style={{zIndex: 1}}>
          <div style={{
            backgroundImage: `url(${koelnSkyImage})`,
            backgroundSize: 'cover',
            height: '90vh',
            width: '100%',
          }}/>
        </ParallaxLayer>
        <ParallaxLayer
            offset={0.7}
            speed={0.5}
            style={{
              zIndex: '1',
              backgroundColor: '#f3e8c2',
              height: '100vh',
            }}/>
        <ParallaxLayer
            offset={0.4}
            speed={0.3}
            style={{
              borderBottom: '4px solid #AE0101',
              zIndex: '1',
              backgroundImage: `url(${Shapes})`,
              backgroundSize: 'cover',
              height: '80vh',
            }}/>
        <ParallaxLayer offset={0.7} speed={0.4} style={{zIndex: '1'}}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: {xs: '400px', md: '600px'},
          }}>
            <img src={logoImage} alt="Logo" style={{width: 'auto', maxHeight: '100%'}}/>
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
            offset={0}
            speed={-0.2}
            style={{
              top: '-8%',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: '8%',
            }}>
          <div style={{
            marginBottom: '16px'
          }}>
            <Typography variant="h2" sx={{
              fontWeight: '400',
              color: '#AE0101',
              fontSize: {xs: '1.5rem', sm: '2.5rem', md: '3.5rem'},
            }}>Courses</Typography>
          </div>
          <div style={{
            lineHeight: '1.5'
          }}>
            <Typography variant="h4"
                        sx={{fontWeight: '400', color: '#000000', fontSize: {xs: '1rem', sm: '1.5rem', md: '2rem'},}}>
              Here you can find the courses offered by DeutschMIT.</Typography>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={1} style={{zIndex: 3}}>
          <div style={{
            borderBottom: '4px solid #AE0101',
            backgroundImage: `url(${koelnCityImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            height: '90vh',
            width: '100%',
          }}/>
        </ParallaxLayer>
      </>
  )
}

export default KoelnParallaxLayer;