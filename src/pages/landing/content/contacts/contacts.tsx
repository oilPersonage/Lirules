import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { useForm } from '@hooks/useForm';
import { useMobileDetect } from '@hooks/useMobileDetect';
import { useAnimationFrame } from '@hooks/useRequestAnimationFrame';
import ContactsImg from '@images/landing/contacts.webp';
import cn from 'classnames';

import { Button } from '@components/Button';
import { Row } from '@components/Grid/grid';
import { Input } from '@components/Input/Input';
import { LandingTitle } from '@components/LandingTitle';

import { landingSelectors } from '@reducers/landing';

import { isNotNil } from '@utils/typeguard';

import { LANDING_COUNT } from '@pages/landing/const';
import {
  CONTACT_INPUTS,
  REGEXP_NAME,
  REGEXP_PHONE,
  REQUIRED_FIELDS,
} from '@pages/landing/content/contacts/const';
import { ContactsInfo } from '@pages/landing/content/contacts/ContactsInfo';
import { ILandingPage } from '@pages/landing/content/content';

import styles from './styles.scss';

export function Contacts({ index, id }: ILandingPage) {
  const isMobile = useMobileDetect();

  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onConfirm = useCallback((newState) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    // console.log('onConfirm', { newState });
  }, []);

  useAnimationFrame({
    callback: () => {
      // form
      if (isNotNil(formRef.current)) {
        formRef.current.style.cssText = `transform: translateX(${
          (window.scrollPosition - LANDING_COUNT) * 100
        }px); opacity: ${window.scrollPosition - LANDING_COUNT + 2}`;
      }

      // image
      if (isNotNil(imageRef.current)) {
        imageRef.current.style.cssText = `transform: translateX(${
          (window.scrollPosition - LANDING_COUNT) * -300
        }px); opacity: ${(window.scrollPosition - LANDING_COUNT + 2) / 2}`;
      }
    },
    isAnimate: window.activeNav - 1 === index || window.activeNav === index,
  });

  const { onChangeHandler, state, onBlurHandler, notification, onConfirmHandler } = useForm({
    record: CONTACT_INPUTS,
    checks: REQUIRED_FIELDS,
    onConfirm: onConfirm,
  });

  return (
    <div className={styles.Contacts} id={id}>
      {!isMobile && (
        <div className={styles.Contacts__imageWrapper} ref={imageRef}>
          <img src={ContactsImg} alt="Lirules на мотоцикле" />
        </div>
      )}
      <Row column>
        <div ref={formRef} className={styles.Contacts__formRef}>
          <div className={styles.Contacts__content}>
            <LandingTitle className={styles.Contacts__title} title="Contact." colorText="us" />
            <div className={styles.Contacts__wrapper}>
              <p className={styles.Contacts__formTitle}>Форма обратной связи</p>
              <p className={styles.Contacts__description}>В течении дня с вами свяжутся</p>
              <div className={styles.Contacts__form}>
                <Input
                  theme="black"
                  name="name"
                  label="Name"
                  inputSize="lg"
                  value={state?.name}
                  regExp={REGEXP_NAME}
                  notification={notification?.name}
                  onChange={onChangeHandler}
                  onBlur={onBlurHandler}
                  required
                />
                <Input
                  theme="black"
                  inputSize="lg"
                  label="Surname"
                  name="surname"
                  regExp={REGEXP_NAME}
                  value={state?.surname}
                  onChange={onChangeHandler}
                  onBlur={onBlurHandler}
                />
                <Input
                  theme="black"
                  inputSize="lg"
                  label="Company"
                  name="company"
                  value={state?.company}
                  onChange={onChangeHandler}
                  onBlur={onBlurHandler}
                />
                <Input
                  theme="black"
                  inputSize="lg"
                  label="Phone"
                  value={state?.phone}
                  notification={notification?.phone}
                  regExp={REGEXP_PHONE}
                  name="phone"
                  onChange={onChangeHandler}
                  onBlur={onBlurHandler}
                  isPhone
                  required
                />
              </div>
            </div>
            <div className={styles.Contacts__button}>
              <Button type="accent" onClick={onConfirmHandler} isLoading={isLoading}>
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </Row>
      {/*<ContactsInfo />*/}
    </div>
  );
}
