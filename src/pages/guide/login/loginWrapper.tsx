import { useState } from 'react';

import { useToggle } from '@hooks/useToggle';

import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { Tabs } from '@components/Tabs/Tabs';

import { Login } from '@pages/guide/login/login/login';
import { Registration } from '@pages/guide/login/registration/registration';
import { emailCheck, passwordCheck, userNameCheck } from '@pages/guide/login/utils/userChecks';

import styles from './styles.scss';

export enum ELoginType {
  LOGIN = 'ВХОД',
  REGISTRATION = 'РЕГИСТРАЦИЯ',
}

export type TUSERINPUT = {
  title: string;
  value: string;
  type?: string;
  check: (v: string) => boolean;
  isValid: boolean;
};

export type TUSER = { [n: string]: TUSERINPUT };

const TAB_NAMES = [ELoginType.LOGIN, ELoginType.REGISTRATION];

export function LoginWrapper() {
  const { isOpen, toggle } = useToggle(false);
  const [loginType, setIsLoginType] = useState<ELoginType | undefined>(undefined);

  const [user, setUser] = useState<TUSER>({
    email: {
      title: 'Email',
      value: '',
      isValid: false,
      check: emailCheck,
    },
    username: {
      title: 'Имя пользователя',
      value: '',
      isValid: false,
      check: userNameCheck,
    },
    password: {
      title: 'Пароль',
      value: '',
      type: 'password',
      isValid: false,
      check: passwordCheck,
    },
  });

  function handleLogin(type: ELoginType) {
    setIsLoginType(type);
    toggle();
  }

  return (
    <div>
      <div className={styles.LoginButtons}>
        <div className={styles.LoginButtons__button}>
          <Button type="outline" size="sm" onClick={() => handleLogin(ELoginType.LOGIN)}>
            Войти
          </Button>
        </div>
        <div className={styles.LoginButtons__button}>
          <Button type="outline" size="sm" onClick={() => handleLogin(ELoginType.REGISTRATION)}>
            Регистрация
          </Button>
        </div>
      </div>
      <Modal isShowing={isOpen} onClose={toggle} isDark center>
        <Tabs names={TAB_NAMES} activeTab={loginType} isDark>
          <Login name={ELoginType.LOGIN} user={user} setUser={setUser} />
          <Registration name={ELoginType.REGISTRATION} user={user} setUser={setUser} />
        </Tabs>
        <div
          id="g_id_onload"
          data-client_id="423871109712-uoi8fpnunqh8pgjr11pajrdrv21f9o2h.apps.googleusercontent.com"
          data-context="signin"
          data-login_uri="/test"
          data-auto_select="true"
          data-itp_support="true"
        />

        <div
          className="g_id_signin"
          data-client_id="423871109712-uoi8fpnunqh8pgjr11pajrdrv21f9o2h.apps.googleusercontent.com"
          data-type="standard"
          data-shape="rectangular"
          data-theme="filled_black"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment=""
          data-width="undefined"
        />
      </Modal>
    </div>
  );
}
