// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { auth } from '../firebase';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // Handle redirect result immediately when the page loads after sign-in
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          setUser(result.user);
        }
      })
      .catch((error) => console.error("Redirect login error:", error))
      .finally(() => {
        // Set up a listener for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
          setUser(authUser);
          setIsPending(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
      });
  }, []);

  return { user, isPending };
};

export default useAuth;
