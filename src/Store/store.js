import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './Slice/EmployeeSlice'

export const store = configureStore({
  reducer: {
    employees: employeeSlice,
  },
})

