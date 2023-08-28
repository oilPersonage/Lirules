import { useCallback, useMemo, useState } from 'react';

import { loginRequest } from '@api/auth';
import { useSignIn } from '@hooks/auth/useSignIn';
import { useRenderInputs } from '@hooks/useRenderInputs';

import { Button } from '@components/Button';

import { TUSER } from '@pages/guide/login/loginWrapper';
import { TFormProps } from '@pages/guide/login/registration/registration';
import { checkAllPropertyUser } from '@pages/guide/login/utils/checkAllPropertyUser';
import { emailCheck, userNameOrEmailCheck } from '@pages/guide/login/utils/userChecks';

import styles from './styles.module.scss';

export function Login({ name, user, setUser }: TFormProps) {
  const filteredUser = useMemo(() => {
    const newUser: TUSER = {};
    newUser.username = { ...user.username, check: userNameOrEmailCheck };
    newUser.password = user.password;
    return newUser;
  }, [user]);

  const onSign = useSignIn();

  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = useCallback(
    (value) => {
      setError(undefined);
      setUser(value);
    },
    [setError, setUser]
  );

  const renderInputs = useRenderInputs({
    inputsData: filteredUser,
    onChange,
  });

  const onLogin = useCallback(() => {
    const isError = checkAllPropertyUser(filteredUser);

    if (isError) {
      setError('Заполните пожалуйста все поля!');
      return;
    }

    const { password, username }: TUSER = filteredUser;

    const sendUser: loginRequest = {
      password: password.value,
    };

    if (sendUser.username && emailCheck(sendUser.username)) {
    }

    // onSign(filteredUser as loginRequest);
  }, [onSign, filteredUser]);

  return (
    <div className={styles.Login}>
      {renderInputs}
      <Button type="accent" size="md" theme="dark" onClick={onLogin} notification={error}>
        Войти
      </Button>
    </div>
  );
}
