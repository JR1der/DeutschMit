import {ParallaxLayer} from "@react-spring/parallax";
import frankfurtSkyImage from "../img/FrankfurtSky.png";
import {Typography} from "@mui/material";
import frankfurtCityImage from "../img/FrankfurtCity.png";

const FrankfurtParallaxLayer = () => {
  return (
      <>
        <ParallaxLayer offset={2} speed={0} style={{zIndex: 1}}>
          <div style={{
            borderTop: '4px solid #AE0101',
            backgroundImage: `url(${frankfurtSkyImage})`,
            backgroundSize: 'cover',
            height: '120vh',
            width: '100%',
          }}/>
        </ParallaxLayer>
        <ParallaxLayer
            offset={2.7}
            speed={1.2}
            style={{
              zIndex: '1',
              backgroundColor: '#f3e8c2',
              height: '100vh',
            }}/>
        <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              top: '-260px',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: '45%'
            }}>
          <div style={{
            marginBottom: '16px'
          }}>
            <Typography variant="h2" sx={{color: '#FFFFFF', fontWeight: '400'}}>Join us! </Typography>
          </div>
          <div style={{
            lineHeight: '1.5'
          }}>
            <Typography variant="h4" sx={{color: '#1E1E1E', fontWeight: '400'}}>Lorem Ipsum is simply dummy text of.
              of. </Typography>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2.5} style={{zIndex: 3}}>
          <div style={{
            backgroundImage: `url(${frankfurtCityImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderBottom: '4px solid #AE0101',
            height: '120vh',
            width: '100%',
          }}/>
        </ParallaxLayer>
      </>
  )
}

export default FrankfurtParallaxLayer;