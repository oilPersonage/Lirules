export const userNameCheck = (v: string) => v.length > 3;

export const emailCheck = (v: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v);
export const userNameOrEmailCheck = (v: string) => {
  if (/@/g.test(v)) {
    return emailCheck(v);
  } else {
    return userNameCheck(v);
  }
};
export const passwordCheck = (v: string) => v.length > 3;
