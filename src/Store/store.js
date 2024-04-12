import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './slice/EmployeeSlice'

export const store = configureStore({
  reducer: {
    employees: employeeSlice,
  },
})

