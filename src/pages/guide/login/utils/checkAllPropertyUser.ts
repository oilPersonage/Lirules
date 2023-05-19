import { TUSER } from '@pages/guide/login/loginWrapper';

export function checkAllPropertyUser(user: TUSER) {
  let isError: string | undefined = undefined;
  Object.keys(user).forEach((el) => {
    if (!user[el].isValid) {
      isError = 'Заполните пожалуйста все поля!';
    }
  });
  return isError;
}
