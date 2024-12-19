import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { User } from "../types";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/users/userSlice";

interface Props {
  openConfirmedModal: boolean,
  setOpenConfirmedModal: (openConfirmedModal: boolean) => void,
  user: User | undefined
}

export default function ConfirmedDelete({ openConfirmedModal, setOpenConfirmedModal, user }: Props) {

  console.log(user)

  // const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  function onCloseModal() {
    setOpenConfirmedModal(false)
  };

  const confirmedDeleted = () => {
    dispatch(deleteUser(user?.id))
    onCloseModal();
  }
 
  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Open modal</Button> */}
      <Modal show={openConfirmedModal} size="md" dismissible={true} onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>

          <div className="space-y-6">
            <div>
              <p className="text-xl">Are you sure you want to eliminate {user?.username}?</p>
            </div>

            <div className="flex gap-4 justify-end">
              <div className="mt-2">
                <Button onClick={confirmedDeleted}>Confirm</Button>
              </div>

              <div className="mt-2">
                <Button onClick={onCloseModal}>Cancel</Button>
              </div>
            </div>
          </div>

          
          
        </Modal.Body>
      </Modal>
    </>
  );
}