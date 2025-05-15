import React from 'react';
import { Container, Paper, Typography, Box, Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  // TODO: Replace with actual user data from your authentication system
  const userData = {
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    graduationYear: '2020',
    department: 'Bilgisayar Mühendisliği',
    currentPosition: 'Yazılım Geliştirici',
    company: 'Tech Company',
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Avatar
              sx={{ width: 100, height: 100, mb: 2 }}
              alt={`${userData.name} ${userData.surname}`}
            />
            <Typography component="h1" variant="h4">
              {userData.name} {userData.surname}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              {userData.email}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <Box sx={{ flex: '1 1 45%', minWidth: '250px' }}>
              <Typography variant="subtitle1" color="text.secondary">
                Mezuniyet Yılı
              </Typography>
              <Typography variant="body1" gutterBottom>
                {userData.graduationYear}
              </Typography>
            </Box>
            <Box sx={{ flex: '1 1 45%', minWidth: '250px' }}>
              <Typography variant="subtitle1" color="text.secondary">
                Bölüm
              </Typography>
              <Typography variant="body1" gutterBottom>
                {userData.department}
              </Typography>
            </Box>
            <Box sx={{ flex: '1 1 45%', minWidth: '250px' }}>
              <Typography variant="subtitle1" color="text.secondary">
                Mevcut Pozisyon
              </Typography>
              <Typography variant="body1" gutterBottom>
                {userData.currentPosition}
              </Typography>
            </Box>
            <Box sx={{ flex: '1 1 45%', minWidth: '250px' }}>
              <Typography variant="subtitle1" color="text.secondary">
                Şirket
              </Typography>
              <Typography variant="body1" gutterBottom>
                {userData.company}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => navigate('/profile/edit')}
            >
              Profili Düzenle
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('/')}
            >
              Ana Sayfaya Dön
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Profile; 