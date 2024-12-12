'use client';

import { useDispatch, useSelector } from 'react-redux';
import { logout, loginWithGoogle } from '@/store/actions/authActions';
import { RootState } from '@/store/store';
import { Box, Typography, Avatar, Button } from '@mui/material';

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={5}
    >
      {user ? (
        <Box textAlign="center">
          <Typography variant="h5" gutterBottom>
            Welcome, {user.displayName}
          </Typography>
          <Avatar
            src={user.photoURL || ''}
            alt="User Avatar"
            sx={{ width: 100, height: 100, margin: '20px auto' }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(logout())}
            sx={{ mt: 2 }}
          >
            Logout
          </Button>
        </Box>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(loginWithGoogle())}
        >
          Login with Google
        </Button>
      )}
    </Box>
  );
}
