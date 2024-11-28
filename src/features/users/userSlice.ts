import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "../../types";

const initialState: UserList = [
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
    deleteUser: (state, actions) => state.filter(item => item.id !== actions.payload), 

    addUser: (state, actions) => [
        ...state,
        actions.payload
    ],

    updateUser: (state, actions) => 
      state.map(item => {
        if (item.id === actions.payload.id) {
          return  actions.payload
        } 
        return item
      })
    }
  }
  );

export default userSlice.reducer;
export const { deleteUser, addUser, updateUser } = userSlice.actions;