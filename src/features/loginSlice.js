import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    logindata:[]
}
const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        addlogindata:(state,action)=>{
            state.logindata.push(action.payload)
        }
    }
    
})
export const {addlogindata} = loginSlice.actions
export default loginSlice.reducer 