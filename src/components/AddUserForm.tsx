import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { User } from "../types";

interface Props {
  openModal: boolean,
  setOpenModal: (openModal: boolean) => void,
  mode: string,
  onSubmit: (user: User) => void,
  selectedUser: User | null
};

export default function AddUserForm({ openModal, setOpenModal, onSubmit, mode, selectedUser }: Props) {

  const [user, setUser] = useState<User>(selectedUser ? selectedUser : {
    name: "",
    username: "",
    id: crypto.randomUUID()
  });

  console.log(user);

  function onCloseModal() {
    setOpenModal(false)
  };

  const handleChange = ((event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value
    })
  });

  const handleSubmit = ((event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(user);
  }) 

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