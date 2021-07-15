import React from 'react';
import { FIREBASE_INSTANCE, FIREBASE_AUTH } from 'config/firebase';

const GoogleSignin = () => {
  const handleGoogleSignin = () => {
    const provider = new FIREBASE_INSTANCE.auth.GoogleAuthProvider();
    FIREBASE_AUTH.signInWithPopup(provider)
      .then(result => alert(`${result.user.email}님 로그인함`))
      .catch(error => console.log(error.code));
  };
  return (
    <div>
      <button name="google" onClick={handleGoogleSignin}>
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleSignin;
