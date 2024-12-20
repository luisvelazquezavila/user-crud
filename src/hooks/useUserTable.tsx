import { useContext } from "react";
import { UserTableContext } from "../context/UserTableContext";
import { User } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../features/users/userSlice";
import { RootState } from "../app/store";

export default function useUserTable() {

  const context = useContext(UserTableContext);

  if (!context) {
    throw new Error("El contexto debe usarse dentro de un provider");
  }
  
  const { 
    mode, 
    setMode, 
    selectedUser, 
    setSelectedUser, 
    openModal, 
    setOpenModal, 
    openConfirmedModal, 
    setOpenConfirmedModal
  } = context;

  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const onSubmit = (user: User) => {
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

  const handleDelete = (user: User) => () => {
    setSelectedUser(user);
    setOpenConfirmedModal(true);
  }

  return { 
    openModal, 
    setOpenModal, 
    mode, 
    onSubmit, 
    selectedUser, 
    setSelectedUser,
    handleCreateUser, 
    handleEditUser,
    users,
    dispatch,
    openConfirmedModal,
    setOpenConfirmedModal,
    handleDelete  
  };
}