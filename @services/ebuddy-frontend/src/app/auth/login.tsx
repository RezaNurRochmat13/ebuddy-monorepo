'use client';

import { useDispatch, useSelector } from 'react-redux';
import { logout, loginWithGoogle } from '@/store/actions/authActions';
import { RootState } from '@/store/store';

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {user ? (
        <div>
          <h3>Welcome, {user.displayName}</h3>
          <img src={user.photoURL || ''} alt="User Avatar" style={{ borderRadius: '50%', width: '100px' }} />
          <button onClick={() => dispatch(logout())} style={{ marginTop: '20px' }}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => dispatch(loginWithGoogle())}>Login with Google</button>
      )}
    </div>
  );
}
