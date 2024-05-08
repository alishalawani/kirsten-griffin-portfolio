import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CameraIcon from '@mui/icons-material/Camera';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { useNavigate } from "react-router-dom";

const pages = [{name: 'About Me', path: "/about"}, {name:'Portfolio', path: "/portfolio"}];

export const Navbar = () => {
    const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    navigate(path, { replace: true });
  };

 
  return (
  <AppBar position="absolute" sx={{
    background: 'none',
  }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CameraIcon sx={{ display: { xs: 'none',sm:'flex', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none',sm:'flex', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Kirsten Griffin
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex',sm:'none', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{
                display: { xs: 'block',sm:'none', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={()=>{handleCloseNavMenu(page.path)}} href={page.path}>
                  <Typography  textAlign="center" sx={{textTransform: 'none',}}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CameraIcon sx={{ display: { xs: 'flex',sm:'none', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex',sm:'none', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '22px'
            }}
          >
            Kirsten Griffin
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none',sm:'flex', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={()=>handleCloseNavMenu(page.path)}
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none', }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Button variant="contained" sx={{ backgroundColor: '#BE292E', borderRadius: '100px', textTransform: 'none', maxHeight: '40px', minWidth: '135px'
     }} endIcon={<ArrowOutwardIcon />} href="/about#contact-me">
  Contact Me
</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
