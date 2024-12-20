import { createContext } from "react";
import { User } from "../types";

interface UseUserTableTypes {
  mode: string, 
  setMode: (mode: string) => void,  
  selectedUser: User | null,
  setSelectedUser: (selectedUser: User | null) => void, 
  openModal: boolean,  
  setOpenModal: (openModal: boolean) => void,
  openConfirmedModal: boolean, 
  setOpenConfirmedModal: (openConfirmedModal: boolean) => void
};

export const UserTableContext = createContext<UseUserTableTypes | undefined>(undefined);