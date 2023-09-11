import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signup as signupApi } from '../../services/apiAuth.js';

export const useSignup = () => {
  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        'Account successfully created, Please verify the account from email',
      );
    },
  });

  return { signup, isSigningUp };
};
