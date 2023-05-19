import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { useUser } from '@hooks/auth/useUser';

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { user } = useUser();
  if (!user) return <Navigate to="/auth/sign-in" replace />;

  return <>{children}</>;
}
