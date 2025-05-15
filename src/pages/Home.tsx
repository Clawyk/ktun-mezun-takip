import React, { useState, useRef, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  TextField,
  Paper,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import ktuBg from '../assets/ktu-bg.jpg';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const welcomeRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Scroll ile ekran geçişi
  useEffect(() => {
    const handleScroll = () => {
      if (!formRef.current || !welcomeRef.current) return;
      const formTop = formRef.current.getBoundingClientRect().top;
      // Eğer form ekranı görünürse showLogin true, değilse false
      if (formTop < window.innerHeight / 2) {
        setShowLogin(true);
      } else {
        setShowLogin(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleArrowClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { text: 'Ana Sayfa', icon: <HomeIcon />, path: '/' },
    { text: 'Profilim', icon: <PersonIcon />, path: '/profile' },
    { text: 'Bildirimler', icon: <NotificationsIcon />, path: '/notifications' },
    { text: 'Ayarlar', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Çıkış Yap', icon: <LogoutIcon />, path: '/logout' },
  ];

  const handleMenuItemClick = (path: string) => {
    setDrawerOpen(true);
    navigate(path);
  };

  const handleMainContentClick = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      {/* Sol Menü */}
      <Drawer
        variant="permanent"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: drawerOpen ? 240 : 60,
          flexShrink: 0,
          position: 'fixed',
          '& .MuiDrawer-paper': {
            width: drawerOpen ? 240 : 60,
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5',
            transition: 'width 0.2s ease-in-out',
            overflowX: 'hidden',
            marginTop: '64px',
            height: 'calc(100% - 64px)',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          },
        }}
      >
        <Box sx={{ overflow: 'auto', height: '100%' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem 
                key={item.text} 
                component="div"
                onClick={() => handleMenuItemClick(item.path)}
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                {drawerOpen && <ListItemText primary={item.text} />}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Ana İçerik */}
      <Box 
        component="main" 
        onClick={handleMainContentClick}
        sx={{ 
          flexGrow: 1, 
          p: 3,
          marginLeft: drawerOpen ? '240px' : '60px',
          transition: 'margin-left 0.2s ease-in-out',
          marginTop: '64px',
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: '#f5f5f5',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Karşılama Ekranı */}
        {!showLogin && (
          <Box
            ref={welcomeRef}
            sx={{
              height: 'calc(100vh - 64px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Arka plan görseli ve gradyan */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                background: `linear-gradient(rgba(33,33,33,0.7), rgba(120,120,120,0.5)), url(${ktuBg}) center center/cover no-repeat`,
                opacity: 0.85,
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h3" gutterBottom sx={{ color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                KTÜN Mezun Takip Sistemine Hoş Geldiniz
              </Typography>
              <Typography variant="h6" color="#fff" paragraph sx={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                Mezunlarımızla iletişimde kalmak ve kariyer fırsatlarını takip etmek için
                sisteme giriş yapın veya kayıt olun.
              </Typography>
              <IconButton
                onClick={handleArrowClick}
                sx={{
                  mt: 4,
                  color: '#fff',
                  animation: 'bounce 2s infinite',
                  zIndex: 2,
                  '@keyframes bounce': {
                    '0%, 20%, 50%, 80%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '40%': {
                      transform: 'translateY(-20px)',
                    },
                    '60%': {
                      transform: 'translateY(-10px)',
                    },
                  },
                }}
              >
                <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Box>
        )}

        {/* Giriş Formu */}
        <Box ref={formRef} sx={{ display: showLogin ? 'flex' : 'none', gap: 4, flexWrap: 'wrap', position: 'relative' }}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleArrowClick}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2 }}
          >
            Hoş Geldiniz Ekranına Dön
          </Button>
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Giriş Yap
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="TC Kimlik No"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Şifre"
                  type="password"
                  margin="normal"
                  required
                />
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Giriş Yap
                </Button>
                <Button
                  variant="text"
                  color="error"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Şifremi Unuttum
                </Button>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Kayıt Ol
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Ad"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Soyad"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="TC Kimlik No"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="E-posta"
                  type="email"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Şifre"
                  type="password"
                  margin="normal"
                  required
                />
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Kayıt Ol
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>

        {/* Ana Sayfa İçeriği (Giriş yapıldıktan sonra görünecek) */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Popüler Paylaşımlar
          </Typography>
          
          {/* Yeni Gönderi Oluşturma */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Bir şeyler paylaşın..."
                variant="outlined"
              />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="error">
                Paylaş
              </Button>
            </CardActions>
          </Card>

          {/* Örnek Gönderiler */}
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Örnek Kullanıcı
              </Typography>
              <Typography variant="body1">
                Bu bir örnek gönderidir. Burada mezunlar paylaşımlarını yapabilir.
              </Typography>
            </CardContent>
            <CardActions>
              <Button startIcon={<ThumbUpIcon />} color="error">
                Beğen
              </Button>
              <Button startIcon={<CommentIcon />} color="error">
                Yorum Yap
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Home; 