import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './slice/EmployeeSlice'
import holidays from './slice/HolidaysSlice'
import EmployeeLeaveHistory from './slice/HistorySlice'
import ProjectsSlice from './slice/ProjectsSlice'
import InventorySlice from './slice/InventorySlice'
import PendingRequestsSlice from './slice/PendingRequestsSlice'
import UserSlice from './slice/UserSlice'

export const store = configureStore({
  reducer: {
    employees: employeeSlice,
    holidays: holidays,
    leaveHistory : EmployeeLeaveHistory,
    Project : ProjectsSlice,
    Inventory : InventorySlice,
    PendingRequests: PendingRequestsSlice,
    users:UserSlice
  },
})

