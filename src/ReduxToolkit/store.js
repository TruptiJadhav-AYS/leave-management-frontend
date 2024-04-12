import {configureStore} from '@reduxjs/toolkit'
import EmployeeList from './Slices/EmployeeListSlice'
export const store =configureStore({
    reducer: {
        EmployeeList: EmployeeList
    }
})