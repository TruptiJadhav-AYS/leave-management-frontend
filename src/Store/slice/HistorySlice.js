import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LeaveHistory: [
    {
        Start_Date: "25/09/2023",
        End_Date: "25/09/2023",
        leave_type: "Half Day",
        reason: "Attending training session",
        status: "Accepted",
      },
    {
      Start_Date: "06/04/2024",
      End_Date: "07/05/2024",
      leave_type: "Full Day",
      reason: "Suffering from fever",
      status: "Pending",
    },
    {
      Start_Date: "12/03/2024",
      End_Date: "14/03/2024",
      leave_type: "Full Day",
      reason: "Family function",
      status: "Accepted",
    },
    {
      Start_Date: "12/03/2024",
      End_Date: "14/03/2024",
      leave_type: "Full Day",
      reason: "Scheduled exams",
      status: "Accepted",
    },
    {
      Start_Date: "10/02/2024",
      End_Date: "10/02/2024",
      leave_type: "Half Day",
      reason: "Shceduled doctors appointment",
      status: "Accepted",
    },
    {
      Start_Date: "12/01/2024",
      End_Date: "14/01/2024",
      leave_type: "Full Day",
      reason: "Family emergency",
      status: "Rejected",
    },
    {
      Start_Date: "09/12/2023",
      End_Date: "10/12/2023",
      leave_type: "Full Day",
      reason: "Scheduled dentist appointment",
      status: "Accepted",
    },
    {
      Start_Date: "25/11/2023",
      End_Date: "25/11/2023",
      leave_type: "Half Day",
      reason: "Attending conference ",
      status: "Accepted",
    },
    {
      Start_Date: "15/11/2023",
      End_Date: "17/11/2023",
      leave_type: "Full Day",
      reason: "Vacation",
      status: "Rejected",
    },
    {
      Start_Date: "10/11/2023",
      End_Date: "",
      leave_type: "Half Day",
      reason: "Personal errands",
      status: "Accepted",
    },
    {
      Start_Date: "05/11/2023",
      End_Date: "07/11/2023",
      leave_type: "Full Day",
      reason: "Attending workshop",
      status: "Accepted",
    },
    {
      Start_Date: "28/10/2023",
      End_Date: "29/10/2023",
      leave_type: "Full Day",
      reason: "Team building activity",
      status: "Accepted",
    },
    {
      Start_Date: "20/10/2023",
      End_Date: "",
      leave_type: "Half Day",
      reason: "Doctor's appointment",
      status: "Accepted",
    },
    {
      Start_Date: "15/10/2023",
      End_Date: "15/10/2023",
      leave_type: "Half Day",
      reason: "Attending seminar",
      status: "Accepted",
    },
    {
      Start_Date: "10/10/2023",
      End_Date: "12/10/2023",
      leave_type: "Full Day",
      reason: "Personal travel",
      status: "Accepted",
    },
    {
      Start_Date: "05/10/2023",
      End_Date: "",
      leave_type: "Half Day",
      reason: "Parent-teacher meeting",
      status: "Rejected",
    },
    {
      Start_Date: "25/09/2023",
      End_Date: "25/09/2023",
      leave_type: "Half Day",
      reason: "Attending training session",
      status: "Accepted",
    },
  ],
};

const LeaveHistorySlice = createSlice({
  name: "EmployeeLeaveHistory",
  initialState : initialState,
  reducers: {
    // updateLeaveHistory: (state, action) => {
    //     state.LeaveHistory = action.payload;
    // }
  },
});


export default LeaveHistorySlice.reducer;
