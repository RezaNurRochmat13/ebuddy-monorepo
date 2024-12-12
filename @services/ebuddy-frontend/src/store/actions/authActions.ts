import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/config/firebase.config';
import { setUser } from '../features/userSlice';
import { AppDispatch } from '../store';

export const loginWithGoogle = () => async (dispatch: AppDispatch) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    dispatch(setUser(result.user));
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);
    dispatch(setUser(null));
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
