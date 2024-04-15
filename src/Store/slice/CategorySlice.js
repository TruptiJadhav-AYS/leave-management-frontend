import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CategoryList : [
        {id:1, name: "Laptop"},
        {id:2, name:"Mobile"},
        {id:3, name:"Tablet"},
        {id:4, name: "Laptop Charger"},
        {id:5, name: "Mobile Charger"},
        {id:6, name: "EarPhones"},
      ]
};

const CategoryListSlice = createSlice({
  name: "CategoryList",
  initialState : initialState,
  reducers: {
    addCategory: (state, action) => {
      state.CategoryList = action.payload;
    },
  },
});

export const { addCategory } = CategoryListSlice.actions;

export default CategoryListSlice.reducer;