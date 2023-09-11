import { HiArrowRightOnRectangle } from 'react-icons/hi2';

import ButtonIcon from '../../ui/ButtonIcon.jsx';
import SpinnerMini from '../../ui/SpinnerMini.jsx';
import { useLogout } from './useLogout.js';

const Logout = () => {
  const { logout, isLoggingOut } = useLogout();

  return (
    <ButtonIcon disabled={isLoggingOut} onClick={logout}>
      {!isLoggingOut ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
};

export default Logout;
