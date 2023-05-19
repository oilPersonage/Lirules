import { useNavigate } from 'react-router-dom';

import { authApi, loginRequest } from '@api/auth';
import { USER_KEY } from '@hooks/auth/const';
import { TUser } from '@hooks/auth/types';
import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query';

// import { ResponseError } from '../utils/Errors/ResponseError';

async function signIn(data: loginRequest): Promise<any> {
  return authApi.login(data);
}

type IUseSignIn = UseMutateFunction<TUser, unknown, loginRequest, unknown>;

export function useSignIn(): IUseSignIn {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signInMutation } = useMutation<TUser, unknown, loginRequest, unknown>(
    ({ email, password, username }: loginRequest) => signIn({ email, password, username }),
    {
      onSuccess: (data) => {
        queryClient.setQueryData([USER_KEY], data);
        navigate('/private');
      },
      onError: (error) => {
        // enqueueSnackbar('Ops.. Error on sign in. Try again!', {
        //   variant: 'error',
        // });
      },
    }
  );

  return signInMutation;
}
