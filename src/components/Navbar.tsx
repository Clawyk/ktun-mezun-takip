import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/ktun-logo.png';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#b71c1c',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <img src={logo} alt="KTÜN Logo" style={{ height: 48, marginRight: 16 }} />
        <Typography 
          variant={isMobile ? "subtitle1" : "h6"} 
          component="div" 
          sx={{ 
            flexGrow: 1,
            textAlign: isMobile ? 'center' : 'left',
            fontSize: isMobile ? '0.9rem' : '1.25rem'
          }}
        >
          KTÜN Yazılım Mühendisliği Bölümü Mezun Takip Sistemi
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Ana Sayfa
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Giriş Yap
          </Button>
          <Button color="inherit" component={RouterLink} to="/register">
            Kayıt Ol
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 