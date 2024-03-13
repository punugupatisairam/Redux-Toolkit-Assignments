import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    alltodos: ['prayer', 'reading', 'fellowship']
};

export const todoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            state.alltodos.push(action.payload);
        },
        deletetodo:(state,action)=>{state.alltodos.splice(action.payload,1)}

    }
});

export const { addtodo,deletetodo } = todoSlice.actions; 
export default todoSlice.reducer;
