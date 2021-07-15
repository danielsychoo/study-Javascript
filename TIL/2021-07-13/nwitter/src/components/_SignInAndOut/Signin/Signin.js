import React from 'react';
import { useInput } from 'hooks';
import { FIREBASE_AUTH } from 'config/firebase';

const Signin = ({ handleToggle }) => {
  const { state, onChange, onReset } = useInput({
    email: '',
    password: '',
  });
  const { email, password } = state;

  const handleSignIn = () => {
    FIREBASE_AUTH.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        alert(`${user.email}님 로그인함`);
      })
      .then(() => {
        onReset();
      })
      .catch(error => console.log(error.code));
  };
  return (
    <div>
      <input
        type="text"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleToggle}>Sign up</button>
    </div>
  );
};

export default Signin;
