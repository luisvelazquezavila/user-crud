import { Button, Label, Modal, TextInput } from "flowbite-react";
import useUserForm from "../hooks/useUserForm";
import useUserTable from "../hooks/useUserTable";

export default function AddUserForm() {

  const { openModal, mode } = useUserTable();

  const { user, onCloseModal, handleChange, handleSubmit, error } = useUserForm();

  return (
    <>
      <Modal show={openModal} size="md" dismissible={true} onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {mode === "create" ? "Create User" : "Edit User"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput
                  id="name"
                  defaultValue={user.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Username" />
                </div>
                <TextInput 
                  id="username" 
                  defaultValue={user.username}
                  onChange={handleChange} 
                  required 
                />
                {error && <p className="text-red-600">{error}</p>}
              </div>
              <div className="w-full mt-2">
                <Button type="submit">Save</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}