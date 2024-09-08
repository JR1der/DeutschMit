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
            height: '100vh',
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
              fontWeight: '500',
              color: '#AE0101',
              fontSize: {xs: '28px', sm: '32px', md: '38px', lg: '42px'},
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 0, 0, 0.4), 0 0 30px rgba(255, 0, 0, 0.2)',
            }}>Courses</Typography>
          </div>
          <div style={{
            lineHeight: '1.5'
          }}>
            <Typography variant="h4"
                        sx={{
                          width: {xs: '50%', sm: '60%', md: '70%', lg: '80%%'},
                          fontWeight: '400',
                          color: '#000000',
                          textAlign: 'left',
                          fontSize: {xs: '20px', sm: '24px', md: '30px', lg: '36px'},
                          textShadow: '0 0 8px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 0, 0, 0.3)', // Softer glow for the description
                        }}>
              Here you can find the courses offered by our online school.</Typography>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={1} style={{zIndex: 3}}>
          <div style={{
            borderBottom: '4px solid #AE0101',
            backgroundImage: `url(${koelnCityImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',
          }}/>
        </ParallaxLayer>
      </>
  )
}

export default KoelnParallaxLayer;