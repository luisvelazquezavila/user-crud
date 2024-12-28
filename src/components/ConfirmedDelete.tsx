import { Button, Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/users/userSlice";
import useUserTable from "../hooks/useUserTable";

export default function ConfirmedDelete() {

  const { openConfirmedModal, setOpenConfirmedModal, selectedUser } = useUserTable();

  const dispatch = useDispatch();

  function onCloseModal() {
    setOpenConfirmedModal(false)
  };

  const confirmedDeleted = () => {
    dispatch(deleteUser(selectedUser?.id))
    onCloseModal();
  }
 
  return (
    <>
      <Modal show={openConfirmedModal} size="md" dismissible={true} onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>

          <div className="space-y-6">
            <div>
              <p className="text-xl">Are you sure you want to eliminate <b>{selectedUser?.username}</b>?</p>
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