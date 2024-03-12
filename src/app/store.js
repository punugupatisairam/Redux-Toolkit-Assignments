import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import counterReducer from'../features/counter/counterSlice'
import todolistReducer from '../features/todolist/todolistSlice'
import todolistSlice from '../features/todolist/todolistSlice'
export const store = configureStore({
  reducer: {counter:counterReducer,todolist:todolistReducer},
})