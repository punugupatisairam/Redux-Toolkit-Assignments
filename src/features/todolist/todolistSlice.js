import { createSlice } from "@reduxjs/toolkit"
// import { Action } from "@reduxjs/toolkit"


export const initialState = {
    todos :[]
}
export const todolistSlice = createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addtodo:(state)=>state.todos.push(action.payload),
        deletetodo:(state)=>state.todos.splice(action.payload)
    }
})
export const {addtodo,deletetodo}=todolistSlice.actions 
export default todolistSlice.reducer