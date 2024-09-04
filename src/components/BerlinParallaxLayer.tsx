import {ParallaxLayer} from "@react-spring/parallax";
import berlinSkyImage from "../img/BerlinSky.png";
import {Typography} from "@mui/material";
import berlinCityImage from "../img/BerlinCity.png";

const BerlinParallaxLayer = () => {
  return (
      <>
        <ParallaxLayer offset={0} speed={0} style={{zIndex: 1}}>
          <div style={{
            backgroundImage: `url(${berlinSkyImage})`,
            backgroundSize: 'cover',
            height: '150vh',
            width: '100%',
          }}/>
        </ParallaxLayer>
        <ParallaxLayer
            offset={0.7}
            speed={0.5}
            style={{
              zIndex: '1',
              backgroundColor: '#f3e8c2',
              height: '80vh',
            }}/>
        <ParallaxLayer
            offset={0}
            speed={-0.2}
            style={{
              top: '-5%',
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
              color: '#FFFFFF',
              fontSize: {xs: '2rem', sm: '3rem', md: '4rem'},
            }}>DeutschMIT</Typography>
          </div>
          <div style={{
            lineHeight: '1.5'
          }}>
            <Typography variant="h4"
                        sx={{fontWeight: '400', color: '#1E1E1E', fontSize: {xs: '1.5rem', sm: '2rem', md: '2.5rem'},}}>
              A
              new, revolutionary online language
              school.</Typography>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={1} style={{zIndex: 3}}>
          <div style={{
            borderBottom: '4px solid #AE0101',
            backgroundImage: `url(${berlinCityImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            height: '120vh',
            width: '100%',
          }}/>
        </ParallaxLayer>
      </>
  )
}

export default BerlinParallaxLayer;