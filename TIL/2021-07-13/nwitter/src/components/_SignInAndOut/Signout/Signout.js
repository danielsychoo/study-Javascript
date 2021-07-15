import { FIREBASE_AUTH } from 'config/firebase';
import { useHistory } from 'react-router-dom';
import React from 'react';

const Signout = () => {
  const { push } = useHistory();
  const handleSignOut = () => {
    FIREBASE_AUTH.signOut();
    push('/');
  };

  return (
    <div>
      <button onClick={handleSignOut}>SignOut</button>
    </div>
  );
};

export default Signout;
