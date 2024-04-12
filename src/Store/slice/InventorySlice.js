import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    InventoryListItems : [
        { name: "Dell", category: "Laptop", serialNo: "76876gbhj8798ui" },
        { name:"HP",category:"Laptop",serialNo:"874385huy87987"},
        { name:"IPhone",category:"Mobile",serialNo:"6bc787hc3827879"},
        { name: "Dell", category: "Laptop Charger", serialNo: "76876gbhj8798uiX" },
        { name: "HP", category: "Laptop Charger", serialNo: "874385huy87987X" },
        { name: "IPhone", category: "Mobile Charger", serialNo: "6bc787hc3827879X" },
      ]
};

const InventoryListSlice = createSlice({
  name: "InventoryList",
  initialState : initialState,
  reducers: {
    // updateLeaveHistory: (state, action) => {
    //     state.LeaveHistory = action.payload;
    // }
  },
});


export default InventoryListSlice.reducer;
