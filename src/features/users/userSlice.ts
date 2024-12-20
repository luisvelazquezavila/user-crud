import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "../../types";

const updateLocalStorage = (state: UserList) => {
  localStorage.setItem('users', JSON.stringify(state));
}

const storedTask = localStorage.getItem('users');

const initialState: UserList = storedTask
  ? JSON.parse(storedTask) as UserList
  : [
  {
    name: "Carlos",
    username: "carlangas",
    id: crypto.randomUUID()
  },
  {
    name: "Pedro",
    username: "pedroncio",
    id: crypto.randomUUID()
  },
  {
    name: "Rodolfo",
    username: "fito",
    id: crypto.randomUUID()
  },
  {
    name: "Lucía",
    username: "lucy",
    id: crypto.randomUUID()
  },
  {
    name: "Sofía",
    username: "sofi",
    id: crypto.randomUUID()
  },
  {
    name: "Luis",
    username: "luigy",
    id: crypto.randomUUID()
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, actions) => {
      const newState = state.filter(item => item.id !== actions.payload);
      updateLocalStorage(newState);
      return(newState);
    },  

    addUser: (state, actions) => {
      const newState = [
        ...state,
        actions.payload
      ];
      updateLocalStorage(newState);
      return newState
    } ,

    updateUser: (state, actions) => {
      const newState = state.map(item => {
        if (item.id === actions.payload.id) {
          return  actions.payload
        } 
        return item
      });

      updateLocalStorage(newState);

      return newState
    }
      
    }
  }
  );

export default userSlice.reducer;
export const { deleteUser, addUser, updateUser } = userSlice.actions;