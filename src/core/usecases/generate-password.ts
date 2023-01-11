const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()[]^;,';

export const generatePassword = (length = 13) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += CHARACTERS.charAt(
      Math.floor(Math.random() * CHARACTERS.length),
    );
  }
  return password;
};
