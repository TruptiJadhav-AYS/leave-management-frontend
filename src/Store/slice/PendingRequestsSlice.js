import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    PendingRequestList : [
    {
      name: "Pratiksha",
      fromDate: "10-04-2024",
      toDate: "10-04-2024",
      leaveType: "Half Day",
      reason: "Doctor appointment",
    },
    {
      name: "Trupti",
      fromDate: "10-04-2024",
      toDate: "10-04-2024",
      leaveType: "Half Day",
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
  ]}

const PendingRequestSlice = createSlice({
    name: 'PendingRequest',
    initialState,
    reducers: {
        // setPendingRequest: (state, action) => {
        //     return action.payload
        // }
    }

})


export default PendingRequestSlice.reducer;
// export const { setPendingRequest } = PendingRequestSlice.actions;