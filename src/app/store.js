import {configureStore} from '@reduxjs/toolkit'
import registerReducer from '../features/registerSlice'
// import loginReducer from '../features/loginSlice'
import loginReducer from '../features/loginSlice'
import { usersdataApi } from '../services/usersdataApi'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer: {
      register:registerReducer,
      login:loginReducer,
      [usersdataApi.reducerPath] :usersdataApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersdataApi.middleware),
})
setupListeners(store.dispatch)



