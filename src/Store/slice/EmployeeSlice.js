import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Employees: [
    {
      id: 3,
      name: "Pruthviraj Suryawanshi",
      mobile_no: "7890789067",
      email: "pruthvi@gmail.com",
      role: "Employee",
      gender: "Male",
      dob: "2003-06-27",
      manager: "Trupti Jadhav",
      department: "Developement",
    },
    {
      id: 1,
      name: "Pratiksha Nimbalkar",
      mobile_no: "7899089087",
      email: "pratiksha@gmail.com",
      role: "Admin",
      gender: "Female",
      dob: "2003-08-17",
      manager: "Ketan Rathod",
      department: "Developement",
    },
    {
      id: 2,
      name: "Trupti Jadhav",
      mobile_no: "6798978458",
      email: "trupti@gmail.com",
      role: "Manager",
      gender: "Female",
      dob: "2003-06-17",
      manager: "Ketan Rathod",
      department: "Developement",
    },
    {
      id: 4,
      name: "Ketan Rathod",
      mobile_no: "6890895679",
      email: "ketan@gmail.com",
      role: "Manager",
      gender: "Male",
      dob: "2000-08-06",
      manager: "Ketan Rathod",
      department: "Human Resource",
    },
    {
      id: 5,
      name: "Pratik Deshmukh",
      mobile_no: "6798957898",
      email: "yogesh@gmail.com",
      role: "Admin",
      gender: "Male",
      dob: "2001-01-06",
      manager: "Mehvish Shaikh",
      department: "Human Resource",
    },
    {
      id: 6,
      name: "Nupur Tyagi",
      mobile_no: "7845956798",
      email: "nupur@gmail.com",
      role: "Employee",
      gender: "Female",
      dob: "2001-10-01",
      manager: "Mehvish Shaikh",
      department: "Developement",
    },
    {
      id: 7,
      name: "Mehvish Shaikh",
      mobile_no: "6790676798",
      email: "mehvish@gmail.com",
      role: "Manager",
      gender: "Female",
      dob: "2000-08-06",
      manager: "Trupti Jadhav",
      department: "Human Resource",
    },
    {
      id: 8,
      name: "Abhinandan Ambekar",
      mobile_no: "6798967588",
      email: "abhi@gmail.com",
      role: "Employee",
      gender: "Male",
      dob: "1997-08-06",
      manager: "Trupti Jadhav",
      department: "Human Resource",
    },
    {
      id: 9,
      name: "Shruti Bagde",
      mobile_no: "6797834798",
      email: "sDevelopementuti@gmail.com",
      role: "Employee",
      gender: "Female",
      dob: "1997-08-02",
      manager: "Mehvish Shaikh",
      department: "Developement",
    },
    {
      id: 10,
      name: "Prerana Divekar",
      mobile_no: "6798957890",
      email: "prerana@gmail.com",
      role: "Employee",
      gender: "Female",
      dob: "1998-02-06",
      manager: "Mehvish Shaikh",
      department: "Human Resource",
    },
    {
      id: 11,
      name: "Abhishek Shinde",
      mobile_no: "6798676798",
      email: "abhi123@gmail.com",
      role: "Employee",
      dob: "1997-08-06",
      gender: "Male",
      manager: "Trupti Jadhav",
      department: "Human Resource",
    },
    {
      id: 12,
      name: "Shital Theware",
      mobile_no: "6798956798",
      email: "shital@gmail.com",
      role: "Employee",
      gender: "Female",
      manager: "Trupti Jadhav",
      department: "Human Resource",
    },
  ],
  userId: "",
  selectedEmp: "",
  userRole: "",
  userId: "",
};

const EmployeeSlice = createSlice({
  name: "EmployeeSlice",
  initialState,
  reducers: {
    addEmp: (state, action) => {
      state.Employees = action.payload;
    },
    getLogedInEmp: (state, action) => {
      state.logedInEmp = action.payload;
    },
    editEmp: (state, action) => {
      state.Employees = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setRole: (state, action) => {
      state.userRole = action.payload;
    },
    setId: (state, action) => {
      state.userId = action.payload;
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
  setRole,
  getLogedInEmp,
  setSelectedEmp,
  deleteEmp,
  setUserId,
} = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
