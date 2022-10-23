import { RequiredField } from '@utils/formTypes';

export const DEFAULT_NOTIFICATION = 'Поле обязательно для заполнения';

export const CONTACT_INPUTS = {
  name: '',
  surname: '',
  company: '',
  phone: '',
};

export const REGEXP_NAME = /[^а-яёА-ЯЁ]/g;
export const REGEXP_PHONE = /[^\w\s]|[a-zа-я]|\s?/gi;
export const PHONE_LENGTH = 11;

export const REQUIRED_FIELDS: RequiredField[] = [
  {
    name: 'name',
    checkFn: (value) => {
      if (!value) return DEFAULT_NOTIFICATION;
      return value?.toString().length === 0 ? DEFAULT_NOTIFICATION : undefined;
    },
  },
  {
    name: 'phone',
    checkFn: (value) => {
      if (!value) return DEFAULT_NOTIFICATION;
      return value?.toString().replace(REGEXP_PHONE, '').length === PHONE_LENGTH
        ? undefined
        : DEFAULT_NOTIFICATION;
    },
  },
];
