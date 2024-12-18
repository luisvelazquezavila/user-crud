import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function ConfirmedDelete() {

  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false)
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Open modal</Button>
      <Modal show={openModal} size="md" dismissible={true} onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            Soy un modal
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}