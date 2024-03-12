import { createSlice } from "@reduxjs/toolkit"
export const initialState = {
    count :0,
}
export const counterSlice = createSlice({
    name :'counter',
    initialState,
    reducers :{
        increment: (state,action) => state.count + 1,
        decrement: (state) => state.count - 1 ,
        reset: (state) => state=initialState.count ,
    },
})
export const {increment,decrement,reset}= counterSlice.actions
export default counterSlice.reducer;