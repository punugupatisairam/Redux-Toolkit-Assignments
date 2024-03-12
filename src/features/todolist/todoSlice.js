import { createSlice } from '@reduxjs/toolkit'
const initialState ={
    alltodos:['reading','prayer']
}
export const todoSlice =createSlice({
    name:'todolist',
    initialState,
    reducers:{
        // addtodo: (state, action) => {
            // return {
            //     ...state,
            //     alltodos: [...state.alltodos, action.payload],
            // }
        addtodo:(state,action)=>{state.alltodos.push(action.payload)},
        deletetodo:(state,action)=>{state.alltodos.splice(action.payload,1)}
    }

})
export const {addtodo,deletetodo} = todoSlice.actions
export default todoSlice.reducer