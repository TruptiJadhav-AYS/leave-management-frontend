import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './slice/EmployeeSlice'
import holidays from './slice/HolidaysSlice'
import EmployeeLeaveHistory from './slice/HistorySlice'
import ProjectsSlice from './slice/ProjectsSlice'
import InventorySlice from './slice/InventorySlice'
import PendingRequestsSlice from './slice/PendingRequestsSlice'
import CategorySlice from './slice/CategorySlice'


export const store = configureStore({
  reducer: {
    Category: CategorySlice,
    employees: employeeSlice,
    holidays: holidays,
    leaveHistory : EmployeeLeaveHistory,
    Project : ProjectsSlice,
    Inventory : InventorySlice,
    PendingRequests: PendingRequestsSlice
  },
})

