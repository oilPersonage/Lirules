import { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';

import { useForm } from '@hooks/useForm';
import { useAnimationFrame } from '@hooks/useRequestAnimationFrame';

import ContactsImg from '@assets/images/landing/contacts.png';

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

import styles from './styles.scss';

export function Contacts({ index }: { index: number }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { activeNav } = useSelector(landingSelectors.landing);

  const onConfirm = useCallback((newState) => {
    // console.log('onConfirm', { newState });
  }, []);

  useAnimationFrame({
    callback: () => {
      // form
      if (isNotNil(formRef.current)) {
        formRef.current.style.cssText = `transform: translateX(${
          (window.scrollPosition - LANDING_COUNT) * 100
        }px); opacity: ${window.scrollPosition + 2 - LANDING_COUNT}`;
      }

      // image
      if (isNotNil(imageRef.current)) {
        imageRef.current.style.cssText = `transform: translateX(${
          (window.scrollPosition - LANDING_COUNT) * -300
        }px); opacity: ${(window.scrollPosition + 2 - LANDING_COUNT) / 2}`;
      }
    },
    isAnimate: activeNav === index || activeNav === index - 1,
  });

  const { onChangeHandler, state, onBlurHandler, notification, onConfirmHandler } = useForm({
    record: CONTACT_INPUTS,
    checks: REQUIRED_FIELDS,
    onConfirm: onConfirm,
  });

  return (
    <div className={styles.Contacts}>
      <div className={styles.Contacts__imageWrapper} ref={imageRef}>
        <img src={ContactsImg} alt="Lirules на мотоцикле" />
      </div>
      <Row>
        <div ref={formRef} className={styles.Contacts__formRef}>
          <div className={styles.Contacts__content}>
            <LandingTitle className={styles.Contacts__title} title="Contact." colorText="us" />
            <div className={styles.Contacts__form}>
              <p className={styles.Contacts__formTitle}>Форма обратной связи</p>
              <p className={styles.Contacts__description}>В течении дня с вами свяжутся</p>
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
          <Button type="accent" onClick={onConfirmHandler}>
            Отправить
          </Button>
        </div>
      </Row>
    </div>
  );
}
