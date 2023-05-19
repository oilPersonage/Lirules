import { TUser } from '@hooks/auth/types';

const USER_LOCAL_STORAGE_KEY = 'TODO_LIST-USER';

export function saveUser(user: TUser): void {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function getUser(): TUser | null {
  const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return user ? JSON.parse(user) : null;
}

export function removeUser(): void {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}
