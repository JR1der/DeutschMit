import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import logoImage from '../img/DeutschMitLogTransparent.png';
import {Box, Typography} from "@mui/material";
import BerlinParallaxLayer from "../components/BerlinParallaxLayer.tsx";
import FrankfurtParallaxLayer from "../components/FrankfurtParallaxLayer.tsx";
import Shapes from "../img/Shapes.png";

const HomePage = () => {
  return (
      <>
        <Parallax pages={4} style={{top: '75px', left: '0'}}>
          <BerlinParallaxLayer/>
          <ParallaxLayer
              offset={0.4}
              speed={0.3}
              style={{
                borderBottom: '4px solid #AE0101',
                zIndex: '1',
                backgroundImage: `url(${Shapes})`,
                backgroundSize: 'cover',
                height: '100vh',
              }}/>
          <ParallaxLayer offset={0.8} speed={0.4} style={{zIndex: '1'}}>
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
              offset={1} speed={0.5}
              style={{
                borderTop: '4px solid #AE0101',
                zIndex: 5,
                backgroundColor: '#FFFCEE',
                padding: '40px'
              }}>
            <Box sx={{
              height: '70vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px'
            }}>
              <Box sx={{
                width: '40%',
                height: '300px',
                border: '2px solid #D3C9B6',
                borderRadius: '8px',
                marginRight: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Typography variant="body1" color="textSecondary" align="center">Image or Placeholder</Typography>
              </Box>
              <Box sx={{width: '50%'}}>
                <Typography variant="h5" align="left"
                            sx={{fontWeight: 'bold', color: '#AE0101', marginBottom: '16px'}}>
                  Lorem Ipsum is simply dummy text of.
                </Typography>
                <Typography variant="body1" align="left" lineHeight="15" sx={{color: '#1E1E1E', lineHeight: '1.5'}}>
                  Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply
                  text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.
                </Typography>
              </Box>
            </Box>
          </ParallaxLayer>
          <ParallaxLayer
              offset={1}
              speed={0.5}
              style={{
                zIndex: '1',
                backgroundColor: '#FFFCEE',
                height: '200vh',
              }}/>
          <FrankfurtParallaxLayer/>
          <ParallaxLayer
              offset={2.8} speed={0.5}
              style={{
                borderTop: '4px solid #AE0101',
                zIndex: 1,
                backgroundColor: '#FFFCEE',
                padding: '40px'
              }}>
            <Box sx={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px'
            }}>
              <Box sx={{width: '50%'}}>
                <Typography variant="h5" align="left"
                            sx={{fontWeight: 'bold', color: '#AE0101', marginBottom: '16px'}}>
                  Lorem Ipsum is simply dummy text of.
                </Typography>
                <Typography variant="body1" align="left" lineHeight="15" sx={{color: '#1E1E1E', lineHeight: '1.5'}}>
                  Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply
                  text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.
                </Typography>
              </Box>
              <Box sx={{
                width: '40%',
                height: '300px',
                border: '2px solid #D3C9B6',
                borderRadius: '8px',
                marginRight: '5%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Typography variant="body1" color="textSecondary" align="center">Image or Placeholder</Typography>
              </Box>
            </Box>
          </ParallaxLayer>
        </Parallax>
      </>
  )
}

export default HomePage;