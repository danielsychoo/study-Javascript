import React from 'react';
import { useInput } from 'hooks';
import { FIREBASE_AUTH } from 'config/firebase';

const CreateAccount = ({ handleToggle }) => {
  const { state, onChange, onReset } = useInput({
    newEmail: '',
    newPassword: '',
  });
  const { newEmail, newPassword } = state;

  const handleCreate = () => {
    FIREBASE_AUTH.createUserWithEmailAndPassword(newEmail, newPassword)
      .then(userCredential => {
        const user = userCredential.user;
        alert(`${user.email}님 가입완료`);
      })
      .then(() => {
        onReset();
        handleToggle();
      })
      .catch(error => {
        console.log(error.code);
      });
  };

  return (
    <div>
      <input
        type="text"
        name="newEmail"
        value={newEmail}
        onChange={onChange}
        required
      />
      <input
        type="password"
        name="newPassword"
        value={newPassword}
        onChange={onChange}
        required
      />
      <button onClick={handleCreate}>Sign up</button>
    </div>
  );
};

export default CreateAccount;
