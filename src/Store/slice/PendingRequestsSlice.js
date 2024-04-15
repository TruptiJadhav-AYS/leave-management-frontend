import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    PendingRequestList : [
    {
      name: "Pratiksha",
      fromDate: "10-04-2024",
      toDate: "10-04-2024",
      leaveType : "Half Day",
      reason: "Family Function",
    },
    {
      name: "Trupti",
      fromDate: "10-04-2024",
      toDate: "10-04-2024",
      leaveType: "Work from home",
      reason: "Doctor appointment",
    },
    {
      name: "Pruthvi",
      fromDate: "10-04-2024",
      toDate: "10-04-2024",
      leaveType: "Half Day",
      reason: "Doctor appointment",
    },
    {
      name: "Priya",
      fromDate: "10-04-2024",
      toDate: "10-04-2024",
      leaveType: "Half Day",
      reason: "Doctor appointment",
    },
    {
      name: "Prerana",
      fromDate: "10-04-2024",
      toDate: "10-04-2024",
      leaveType: "Half Day",
      reason: "Doctor appointment",
    },
    {
      name: "Riya",
      fromDate: "10-04-2024",
      toDate: "10-04-2024",
      leaveType: "Half Day",
      reason: "Doctor appointment",
    },
    {
      name: "Nisha",
      fromDate: "10-04-2024",
      toDate: "",
      leaveType: "Half Day",
      reason: "Doctor appointment",
    }
  ]}

const PendingRequestSlice = createSlice({
    name: 'PendingRequest',
    initialState,
    reducers: {
      addRequest: (state, action) => {
        state.annualLeaves = action.payload;
      }, 
    }

})


export default PendingRequestSlice.reducer;
export const { addRequest } = PendingRequestSlice.actions;