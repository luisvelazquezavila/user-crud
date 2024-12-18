import { ReactNode, useState } from "react";
import { UserTableContext } from "../context/UserTableContext";
import { User } from "../types";

interface MyProviderProps {
  children: ReactNode
}

export default function UserTableProvider({ children }: MyProviderProps) {

  const [mode, setMode] = useState('create');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [openModal, setOpenModal] = useState(false);

  return (
    <UserTableContext.Provider value={{
      mode,
      setMode,
      selectedUser,
      setSelectedUser,
      openModal,
      setOpenModal
    }}>
      { children }
    </UserTableContext.Provider>
  )
}