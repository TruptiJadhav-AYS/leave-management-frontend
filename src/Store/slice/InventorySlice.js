import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    InventoryListItems : [
        {id:1, name: "Dell", category: "Laptop", serialNo: "76876gbhj8798ui", assign:1},
        {id:2, name:"HP",category:"Laptop",serialNo:"874385huy87987",assign:1},
        {id:3, name:"IPhone",category:"Mobile",serialNo:"6bc787hc3827879",assign:0},
        {id:4, name: "Dell", category: "Laptop Charger", serialNo: "76876gbhj8798uiX",assign:0 },
        {id:5, name: "HP", category: "Laptop Charger", serialNo: "874385huy87987X",assign:0 },
        {id:6, name: "IPhone", category: "Mobile Charger", serialNo: "6bc787hc3827879X", assign:1 },
      ]
};

const InventoryListSlice = createSlice({
  name: "InventoryList",
  initialState : initialState,
  reducers: {
    addInventory: (state, action) => {
      state.InventoryListItems = action.payload;
    },
    deleteInv: (state, action) => {
      //   console.log(action.payload);
      if (action.payload !== -1) {
        state.InventoryListItems.splice(action.payload, 1);
      }
    },
  },
});

export const { addInventory,deleteInv } = InventoryListSlice.actions;

export default InventoryListSlice.reducer;
