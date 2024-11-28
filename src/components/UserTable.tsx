import { useDispatch, useSelector } from "react-redux";
import { TheadKeyList, User } from "../types"
import { RootState } from "../app/store";
import { addUser, deleteUser, updateUser } from "../features/users/userSlice";
import AddUserForm from "./AddUserForm";
import { useState } from "react";

export default function UserTable() {

  const [mode, setMode] = useState('create');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const theadKeys: TheadKeyList = [
    {
      title: "Name"
    },
    {
      title: "Username"
    },
    {
      title: ""
    }
  ];

  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (user: User) => {
    if (mode === 'create') {
      dispatch(addUser(user));
    } else {
      dispatch(updateUser(user));
    } 
    setOpenModal(false);
  };

  const handleCreateUser = () => {
    setMode("create");
    setSelectedUser(null);
    setOpenModal(true);
  }

  const handleEditUser = (user: User) => () => {
    setMode("edit");
    setSelectedUser(user);
    setOpenModal(true);
  }

  return (
    <>
      <h3>Tabla de contenido</h3>
      <button 
        onClick={handleCreateUser}
      >
        Create User
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            {theadKeys.map((theadKey) => (
              <th key={theadKey.title}>{theadKey.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <div>
                  <button 
                    onClick={handleEditUser(user)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgba(0, 0, 255, 1)"
                      }}
                    >
                      <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z" />
                      <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z" />
                    </svg>
                  </button>
                  <button onClick={() => dispatch(deleteUser(user.id))}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgba(255, 0, 0, 1)",
                        transform: "",
                        msFilter: "",
                      }}
                    >
                      <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z" />
                    </svg>
                  </button>                 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && (
        <AddUserForm 
          openModal={openModal}
          setOpenModal={setOpenModal}
          mode={mode}
          onSubmit={handleSubmit}
          selectedUser={selectedUser}
        />
      )}
    </>
  );
}