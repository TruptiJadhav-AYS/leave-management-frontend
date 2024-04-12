import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    Projects : [
        {
          Name: "Employee Management System",
          Project_Manager: "Ketan Rathod",
          Start_date: "20-04-2024",
          End_date: "20-07-2024",
          Status: "Active",
          // Assign: 1,
        },
        {
          Name: "Horeca",
          Project_Manager: "Prashil Sir",
          Start_date: "20-04-2024",
          End_date: "20-07-2024",
          Status: "Active",
          // Assign: 1,
        },
        {
          Name: "Bloqcube",
          Project_Manager: "Mehvish Shaikh",
          Start_date: "20-04-2024",
          End_date: "20-07-2024",
          Status: "Active",
          // Assign: 1,
        },
        {
          Name: "Zopt",
          Project_Manager: "Abhishek Shinde",
          Start_date: "20-04-2024",
          End_date: "20-07-2024",
          Status: "Active",
          // Assign: 1,
        },
        {
          Name: "Leave Management",
          Project_Manager: "Pratiksha Nimbalkar",
          Start_date: "20-04-2024",
          End_date: "20-07-2024",
          Status: "Active",
          // Assign: 1,
        },
        {
          Name: "Whatsapp Clone",
          Project_Manager: "Prerana Divekar",
          Start_date: "20-04-2024",
          End_date: "20-07-2024",
          Status: "Active",
          // Assign: 1,
        },
        {
          Name: "Amazon Clone",
          Project_Manager: "Pruthvi",
          Start_date: "20-04-2024",
          End_date: "20-07-2024",
          Status: "Active",
          // Assign: 1,
        },
        {
          Name: "Instagram Clone",
          Project_Manager: "Pruthvi",
          Start_date: "20-04-2024",
          End_date: "20-07-2024",
          Status: "Active",
          // Assign: 1,
        },
      ]
}


const Projectlice = createSlice({
    name: 'project',
    initialState,
    reducers: {

    }
})


export default Projectlice.reducer