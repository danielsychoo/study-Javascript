import React from 'react';
import { FIREBASE_INSTANCE, FIREBASE_AUTH } from 'config/firebase';

const MobileSignin = () => {
  const USER_MOBILE = '+821099477131';
  const handleMobileSignin = () => {
    const applicationVerifier = new FIREBASE_INSTANCE.auth.RecaptchaVerifier(
      'recaptcha-container',
    );
    FIREBASE_AUTH.signInWithPhoneNumber(USER_MOBILE, applicationVerifier)
      .then(confirmationResult => {
        const verificationCode = window.prompt(
          'Please enter the verification' +
            'code that was sent to your mobile device.',
        );

        return confirmationResult.confirm(verificationCode);
      })
      .catch(error => console.log(error.code));
  };
  return (
    <div>
      <button name="mobile" onClick={handleMobileSignin}>
        Continue with Mobile
      </button>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default MobileSignin;
