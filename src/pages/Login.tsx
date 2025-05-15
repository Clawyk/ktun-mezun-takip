import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentNumber: '',
    fullName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Şimdilik sadece ana sayfaya yönlendiriyoruz
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Giriş Yap
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Öğrenci Numarası"
              name="studentNumber"
              value={formData.studentNumber}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Ad Soyad"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Giriş Yap
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 