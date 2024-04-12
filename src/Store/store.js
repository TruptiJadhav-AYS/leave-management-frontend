import { configureStore } from '@reduxjs/toolkit'
import EmployeeSlice from './slice/EmployeeSlice'
import holidays from './slice/HolidaysSlice'
import EmployeeLeaveHistory from './slice/HistorySlice'
import ProjectsSlice from './slice/ProjectsSlice'
import InventorySlice from './slice/InventorySlice'
import PendingRequestsSlice from './slice/PendingRequestsSlice'
export const store = configureStore({
  reducer: {
    employees: EmployeeSlice,
    holidays: holidays,
    leaveHistory : EmployeeLeaveHistory,
    Project : ProjectsSlice,
    Inventory : InventorySlice,
    PendingRequests: PendingRequestsSlice
  },
})

