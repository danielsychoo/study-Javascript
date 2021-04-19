const emailValidation = (newEmail) => {
  let emailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailExp.test(newEmail)) return true;
  else return false;
};

export default emailValidation;
