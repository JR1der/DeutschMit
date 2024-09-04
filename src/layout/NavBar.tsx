import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../img/DeutschMitLogTransparent.png';
import {useNavigate} from "react-router-dom";

const pages = ['Courses', 'About Us', 'FAQ'];
const routes = ['/courses', '/about', '/faq'];

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (route: string) => {
    navigate(route);
    handleCloseNavMenu();
  };
  return (
      <AppBar sx={{backgroundColor: '#FFFCEE', borderBottom: '4px solid #AE0101'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center', mr: 2}}>
              <img onClick={() => handleNavigate('/')} src={logo} alt="Logo"
                   style={{cursor: 'pointer', height: '85px', marginRight: '10px', marginLeft: '20px'}}/>
            </Box>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
              >
                <MenuIcon sx={{color: '#DD0303'}}/>
              </IconButton>
              <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{display: {xs: 'block', md: 'none'}}}
              >
                {pages.map((page, index) => (
                    <MenuItem sx={{
                      '&:hover': {
                        backgroundColor: '#ec3939',
                        color: '#FFFCEE',
                        transition: '0.4s ease-in-out'
                      }
                    }} key={page} onClick={() => handleNavigate(routes[index])}>
                      <Button sx={{
                        textAlign: 'center',
                        color: '#DD0303',
                        fontWeight: 600,
                        fontSize: '1rem',
                        textTransform: 'none',
                        width: '100%',
                        justifyContent: 'flex-start',
                        '&:hover': {
                          color: '#FFFCEE',
                          transition: '0.4s ease-in-out'
                        }
                      }}>{page}</Button>
                    </MenuItem>
                ))}
                <MenuItem sx={{
                  textAlign: 'center',
                  backgroundColor: '#FFCC01', '&:hover': {
                    backgroundColor: '#ec3939',
                    color: '#FFFCEE',
                    transition: '0.4s ease-in'
                  }
                }} onClick={handleCloseNavMenu}>
                  <Button
                      sx={{
                        textAlign: 'center',
                        color: '#DD0303',
                        fontWeight: 600,
                        fontSize: '1rem',
                        textTransform: 'none',
                        justifyContent: 'flex-start',
                        '&:hover': {
                          color: '#FFFCEE',
                          transition: '0.4s ease-in-out'
                        }
                      }}
                      onClick={() => handleNavigate("/register")}>Register</Button>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, alignItems: 'right', justifyContent: 'right'}}>
              <img onClick={() => handleNavigate('/')} src={logo} alt="Logo"
                   style={{cursor: 'pointer', height: '85px'}}/>
            </Box>
            <Box sx={{
              flexGrow: 1,
              display: {xs: 'none', md: 'flex'},
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
              {pages.map((page, index) => (
                  <Button
                      key={page}
                      onClick={() => handleNavigate(routes[index])}
                      sx={{
                        my: 2,
                        color: '#DD0303',
                        display: 'block',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: '#ec3939',
                          color: '#FFFCEE',
                          transition: '0.4s ease-in'
                        }
                      }}
                  >
                    {page}
                  </Button>
              ))}
              <Button
                  onClick={() => handleNavigate("/register")}
                  sx={{
                    my: 2,
                    color: '#DD0303',
                    display: 'block',
                    backgroundColor: '#FFCC01',
                    p: 1,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#DD0303',
                      color: '#FFFCEE',
                      transition: '0.4s ease-in'
                    }
                  }}
              >
                Register
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default NavBar;