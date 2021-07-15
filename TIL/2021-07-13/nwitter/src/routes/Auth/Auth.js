import React from 'react';
import { CreateAccount, Signin, GoogleSignin, MobileSignin } from 'components';
import { useToggle } from 'hooks';

const Auth = () => {
  const { isOn, handleToggle } = useToggle();

  return (
    <div>
      <Signin handleToggle={handleToggle} />
      <MobileSignin />
      <GoogleSignin />
      {isOn && <CreateAccount handleToggle={handleToggle} />}
    </div>
  );
};

export default Auth;
