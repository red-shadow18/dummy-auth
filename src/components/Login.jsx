// src/components/Login.jsx
import { signInWithRedirect } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const Login = () => {
  const handleGoogleSignIn = () => {
    signInWithRedirect(auth, googleProvider);
  };

  return (
    <div>
      <h2>Sign in to your account</h2>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
