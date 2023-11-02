import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import auth from '../FireBase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // crrate user for register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google SignIn
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // set observe auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false);
      // if user exists then issue a token
      if (currentUser) {
        axios
          .post('http://localhost:3000/jwt', loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log('token response', res.data);
          });
      } else {
        axios
          .post('http://localhost:3000/logout', loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// Prop-Types validate
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
