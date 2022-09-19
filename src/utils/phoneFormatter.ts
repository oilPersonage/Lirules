import { PHONE_LENGTH } from '@pages/landing/content/contacts/const';

export function phoneFormatter(phone: string): string {
  let value = phone.substring(0, PHONE_LENGTH);
  // added 7
  if (value.length === 1 && value !== '7') value = '7' + value;
  const matchPhone = value.match(/^7/);

  // replace 7 on +7
  if (matchPhone) value = value.replace(/^7/, '+7');
  const match = value.match(/(\+7)(\d{3}) ?(\d{3})(\d{4})$/);

  if (match) {
    return match[1] + ' ' + match[2] + ' ' + match[3] + '-' + match[4];
  }

  return value;
}
