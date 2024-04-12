import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slice/UserSlice'
import employeeSlice from "./slice/EmployeeSlice" 

export const store = configureStore({
  reducer: {
    employees: employeeSlice,
    user_credentials: UserSlice
  },
})

