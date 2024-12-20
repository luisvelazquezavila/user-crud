import { useEffect, useState } from "react";
import { User } from "../types";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import useUserTable from "./useUserTable";

export default function useUserForm() {

  const { setOpenModal, onSubmit, selectedUser } = useUserTable();

  const [user, setUser] = useState<User>(selectedUser ? selectedUser : {
    name: "",
    username: "",
    id: crypto.randomUUID()
  });

  const [error, setError] = useState<string | null>(null);

  const users = useSelector((state: RootState) => state.users);
  const usernames = users.map(user => user.username);

  function onCloseModal() {
    setOpenModal(false)
  };

  const handleChange = ((event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value.toLowerCase()
    })
  });

  const handleSubmit = ((event: React.FormEvent) => {
    event.preventDefault();
    if (!error) {    
      onSubmit(user);
    }
    
  }) 

  useEffect(() => { 
    if (selectedUser !== user) {
      const existingUsername = usernames.some(username => username === user.username.toLowerCase() && username !== selectedUser?.username);
      
      if (existingUsername) {
        setError("Username existente");
      } else {
        setError(null);
      };
    };
  }, [usernames, user.username, selectedUser, user]);

  return { user, setUser, onCloseModal, handleChange, handleSubmit, error };
}