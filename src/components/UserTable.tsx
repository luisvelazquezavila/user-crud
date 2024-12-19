import { deleteUser } from "../features/users/userSlice";
import AddUserForm from "./AddUserForm";
import useUserTable from "../hooks/useUserTable";
import ConfirmedDelete from "./ConfirmedDelete";
import { useState } from "react";
import { User } from "../types";

export default function UserTable() {

  const theadKeys = ["Name", "Username",""];

  const [openConfirmedModal, setOpenComfirmedModal] = useState(false);
  // const [selectedUser, setSelectedUser] = useState<User | undefined>();
  // console.log(selectedUser);

  const { 
    openModal, 
    handleCreateUser, 
    handleEditUser,
    users,
    dispatch,
    selectedUser,
    setSelectedUser  
  } = useUserTable();

  const handleDelete = (user: User) => () => {
    setSelectedUser(user);
    setOpenComfirmedModal(true);
  }

  return (
    <div className="h-screen grid place-content-center gap-y-4 bg-pink-100">
      <h3 className="text-5xl mb-28">
        User Table
      </h3>
      <button 
        onClick={handleCreateUser}
        className="text-white bg-cyan-600 py-2 px-4 rounded-lg w-fit text-xl font-bold"
      >
        Create User
      </button>
      <table className="rounded-lg">
        <thead className="bg-cyan-600 text-white rounded-lg">
          <tr>
            {theadKeys.map((theadKey) => (
              <th key={theadKey} className="py-2 px-4">{theadKey}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id }>
              <td className="bord-cyan-600 border-solid border-4 px-4 py-2">{user.name}</td>
              <td className="bord-cyan-600 border-solid border-4 px-4 py-2">{user.username}</td>
              <td className="bord-cyan-600 border-solid border-4 px-4 py-2">
                <div className="flex gap-2">
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
                  <button onClick={handleDelete(user)}>
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
      {
        openConfirmedModal && (
          <ConfirmedDelete 
            openConfirmedModal={openConfirmedModal}
            setOpenConfirmedModal={setOpenComfirmedModal}
            user={selectedUser}
          />
        )
      }
      {openModal && (
        <AddUserForm />
      )}     
    </div>
  );
}