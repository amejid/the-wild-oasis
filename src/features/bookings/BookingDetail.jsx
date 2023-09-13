import { HiArrowUpOnSquare } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useMoveBack } from '../../hooks/useMoveBack.js';
import Button from '../../ui/Button.jsx';
import ButtonGroup from '../../ui/ButtonGroup.jsx';
import ButtonText from '../../ui/ButtonText.jsx';
import ConfirmDelete from '../../ui/ConfirmDelete.jsx';
import Empty from '../../ui/Empty.jsx';
import Heading from '../../ui/Heading';
import Modal from '../../ui/Modal.jsx';
import Row from '../../ui/Row';
import Spinner from '../../ui/Spinner.jsx';
import Tag from '../../ui/Tag.jsx';
import { useCheckout } from '../check-in-out/useCheckout.js';
import BookingDataBox from './BookingDataBox.jsx';
import { useBooking } from './useBooking.js';
import { useDeleteBooking } from './useDeleteBooking.js';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const BookingDetail = () => {
  const navigate = useNavigate();
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resourceName="booking" />;

  const { status, id: bookingId } = booking;
  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <>
      <Row $type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag $type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        {status === 'checked-in' && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open opens="delete">
            <Button $variation="danger">Delete booking</Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              onConfirm={() =>
                deleteBooking(bookingId, { onSettled: () => navigate(-1) })
              }
              resourceName="booking"
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
        <Button $variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
};

export default BookingDetail;
