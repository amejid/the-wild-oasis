import { useState } from 'react';

import Button from '../../ui/Button.jsx';
import Modal from '../../ui/Modal.jsx';
import CreateCabinForm from './CreateCabinForm.jsx';

const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddCabin;
