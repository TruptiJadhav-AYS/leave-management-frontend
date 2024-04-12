import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    EmployeeList : [{
    Name: "Pruthviraj Suryawanshi",
    Email: "pruthvi@gmail.com",
    // Role: "Employee",
    Gender: "Male",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Pratiksha Nimbalkar",
    Email: "pratiksha@gmail.com",
    // Role: "Employee",
    Gender: "Female",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Trupti Jadhav",
    Email: "trupti@gmail.com",
    // Role: "Employee",
    Gender: "Female",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Ketan Rathod",
    Email: "ketan@gmail.com",
    // Role: "Manager",
    Gender: "Male",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Yogesh Patel",
    Email: "yogesh@gmail.com",
    // Role: "Admin",
    Gender: "Male",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Nupur Tyagi",
    Email: "nupur@gmail.com",
    // Role: "Employee",
    Gender: "Female",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Mehvish Shaikh",
    Email: "mehvish@gmail.com",
    // Role: "Employee",
    Gender: "Female",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Abhinandan Ambekar",
    Email: "abhi@gmail.com",
    // Role: "Employee",
    Gender: "Male",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Shruti Bagde",
    Email: "shruti@gmail.com",
    // Role: "Employee",
    Gender: "Female",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Prerana Divekar",
    Email: "prerana@gmail.com",
    // Role: "Employee",
    Gender: "Female",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Abhishek Shinde",
    Email: "abhi123@gmail.com",
    // Role: "Employee",
    Gender: "Male",
    manager: "Yogesh Patel",
    Department: "HR",
  },
  {
    Name: "Shital Theware",
    Email: "shital@gmail.com",
    // Role: "Employee",
    Gender: "Female",
    manager: "Yogesh Patel",
    Department: "HR",
  }
]};

const EmployeeListSlice = createSlice({
    name:"EmployeeList1",
    initialState : initialState,
    reducer : {
        getEmployeeList(state, action){
            state.employeeList=action.payload;
        }
    }
})



export  const {getEmployeeList} = EmployeeListSlice.actions;
export  default EmployeeListSlice.reducer;