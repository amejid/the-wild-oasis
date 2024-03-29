import PropTypes from 'prop-types';

import Button from '../../ui/Button.jsx';
import { useCheckout } from './useCheckout.js';

const CheckoutButton = ({ bookingId }) => {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      $variation="primary"
      $size="small"
      disabled={isCheckingOut}
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  );
};

CheckoutButton.propTypes = {
  bookingId: PropTypes.number.isRequired,
};

export default CheckoutButton;
