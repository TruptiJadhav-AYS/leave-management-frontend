import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./slice/EmployeeSlice";
import holidays from "./slice/HolidaysSlice";
import EmployeeLeaveHistory from "./slice/HistorySlice";
import ProjectsSlice from "./slice/ProjectsSlice";
import InventorySlice from "./slice/InventorySlice";
import CategorySlice from "./slice/CategorySlice";
import employeeApi from "./slice/apiEmployeeSlice";
import projectApi from "./slice/apiProjectSlice";
import holidaysApi from "./slice/apiHolidaySlice";
import forgotApi from "./slice/apiForgetPassword";
import categoryApi from "./slice/apiCategorySlice";
import inventoryApi from "./slice/apiInventorySlice";
import departmentApi from "./slice/apiDepartmentSlice";
import leaveReqApi from "./slice/apiLeaveReqSlice";
import leaveBalanceApi from "./slice/apiLeaveBalanceSlice";

export const store = configureStore({
  reducer: {
    Category: CategorySlice,
    employees: employeeSlice,
    holidays: holidays,
    leaveHistory: EmployeeLeaveHistory,
    Project: ProjectsSlice,
    Inventory: InventorySlice,
    [employeeApi.reducerPath]: employeeApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [holidaysApi.reducerPath]: holidaysApi.reducer,
    [forgotApi.reducerPath]: forgotApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [inventoryApi.reducerPath]: inventoryApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [leaveReqApi.reducerPath]: leaveReqApi.reducer,
    [leaveBalanceApi.reducerPath]: leaveBalanceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(employeeApi.middleware)
      .concat(projectApi.middleware)
      .concat(holidaysApi.middleware)
      .concat(forgotApi.middleware)
      .concat(categoryApi.middleware)
      .concat(inventoryApi.middleware)
      .concat(departmentApi.middleware)
      .concat(leaveReqApi.middleware)
      .concat(leaveBalanceApi.middleware),
});
