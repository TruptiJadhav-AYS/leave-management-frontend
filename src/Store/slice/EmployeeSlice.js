import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Employees: [],
  logedInEmp: "",
  selectedEmp: "",
  userRole: "",
  userId:"",
};

const EmployeeSlice = createSlice({
  name: "EmployeeSlice",
  initialState,
  reducers: {
    addEmp: (state, action) => {
      state.Employees = action.payload;
    },

    // get logedInEmployee Id
    getLogedInEmp: (state, action) => {
      state.logedInEmp = action.payload;
    },
    editEmp: (state, action) => {
      state.Employees = action.payload;
    },
    setUserId:(state,action)=>{
      state.userId= action.payload;
    },
    getRole: (state, action) => {
      state.userRole = action.payload;
    },
    
    setSelectedEmp: (state, action) => {
      state.selectedEmp = action.payload;
    },
    deleteEmp: (state, action) => {
      state.Employees = action.payload;
    },
  },
});

export const {
  addEmp,
  editEmp,
  getRole,
  getLogedInEmp,
  setSelectedEmp,
  deleteEmp,
  setUserId,
} = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
