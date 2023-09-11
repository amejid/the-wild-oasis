import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { login as loginApi } from '../../services/apiAuth.js';

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => navigate('/dashboard'),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoggingIn };
};
