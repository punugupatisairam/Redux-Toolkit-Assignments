import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    regdata:[]
}
const registerSlice = createSlice({
    name:'register',
    initialState,
    reducers:{
        addregdata:(state,action)=>{
            state.regdata.push(action.payload)
        }
    }
})
export const {addregdata} = registerSlice.actions;
export default registerSlice.reducer




