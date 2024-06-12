import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUser:(state, action) =>{
            console.log(action)
            const data = {
                id:nanoid(),
                name:action.name
            }
            state.users.push(data)
        }
    }
})

export const { addUser } = Slice.actions;
export default Slice.reducer