import { useEffect } from 'react';

import { USER_KEY } from '@hooks/auth/const';
import { TUser } from '@hooks/auth/types';
import { useQuery } from '@tanstack/react-query';

import { getUser, removeUser, saveUser } from '@utils/user.localstorage';

export function useUser() {
  const { data: user } = useQuery<TUser | null>(
    [USER_KEY],
    // async (): Promise<TUser | null> => getUser(user),
    async (): Promise<TUser | null> => getUser(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      initialData: getUser,
      onError: () => {
        removeUser();
      },
    }
  );

  useEffect(() => {
    if (!user) removeUser();
    else saveUser(user);
  }, [user]);

  return {
    user: user ?? null,
  };
}
