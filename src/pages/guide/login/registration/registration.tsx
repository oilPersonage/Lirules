import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { useRenderInputs } from '@hooks/useRenderInputs';

import { Button } from '@components/Button';

import { ELoginType, TUSER } from '@pages/guide/login/loginWrapper';
import { checkAllPropertyUser } from '@pages/guide/login/utils/checkAllPropertyUser';

import styles from './styles.scss';

export type TFormProps = {
  name: ELoginType;
  user: TUSER;
  setUser: Dispatch<SetStateAction<TUSER>>;
};

export function Registration({ name, user, setUser }: TFormProps) {
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = useCallback(
    (value) => {
      setError(undefined);
      setUser(value);
    },
    [setError, setUser]
  );
  const renderInputs = useRenderInputs({ inputsData: user, onChange });

  const onRegistration = useCallback(() => {
    const isError = checkAllPropertyUser(user);

    if (isError) {
      setError('Заполните пожалуйста все поля!');
    }
  }, [user]);

  return (
    <div className={styles.Login}>
      {renderInputs}
      <Button type="accent" size="md" theme="dark" notification={error} onClick={onRegistration}>
        Зарегистрироваться
      </Button>
    </div>
  );
}
