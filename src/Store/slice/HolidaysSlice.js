import { createSlice } from "@reduxjs/toolkit";

import newYear from "../../assets/newyear.jpg";
import republicDay from "../../assets/republicday.jpg";
import holi from "../../assets/holi.jpg";
import eid from "../../assets/eid.jpg";
import gudhipadwa from "../../assets/gudhipadwa.jpg";
import mayday from "../../assets/mayday.jpg";
import independanceDay from "../../assets/independance.jpg";
import ganeshChaturthi from "../../assets/ganeshchaturthi.jpg";
import gandhiJayanti from "../../assets/gandhijayanti.jpg";
import dusshera from "../../assets/dusshera.jpg";
import diwali from "../../assets/diwali.png";
import christmas from "../../assets/christmas.jpg";

const initialState = {
  annualLeaves: [
    {
      id: 1,
      date: "2024-01-01",
      day: "Monday",
      occasion: "New Year",
      img: newYear,
    },
    {
      id: 2,
      date: "2024-01-26",
      day: "Friday",
      occasion: "Republic Day",
      img: republicDay,
    },
    { id: 3, date: "2024-03-25", day: "Monday", occasion: "Holi", img: holi },
    {
      id: 4,
      date: "2024-04-09",
      day: "Tuesday",
      occasion: "Gudhi padwa",
      img: gudhipadwa,
    },
    { id: 5, date: "2024-04-11", day: "Thursday", occasion: "Eid", img: eid },
    {
      id: 6,
      date: "2024-05-01",
      day: "Wednesday",
      occasion: "Labour Day",
      img: mayday,
    },
    {
      id: 7,
      date: "2024-08-15",
      day: "Thursday",
      occasion: "Independence Day",
      img: independanceDay,
    },
    {
      id: 8,
      date: "2024-09-07",
      day: "Saturday",
      occasion: "Ganesh Chaturthi",
      img: ganeshChaturthi,
    },
    {
      id: 9,
      date: "2024-10-02",
      day: "Wednesday",
      occasion: "Gandhi Jayanti",
      img: gandhiJayanti,
    },
    {
      id: 10,
      date: "2024-10-12",
      day: "Saturday",
      occasion: "Dussehra",
      img: dusshera,
    },
    {
      id: 11,
      date: "2024-11-01",
      day: "Friday",
      occasion: "Diwali",
      img: diwali,
    },
    {
      id: 12,
      date: "2024-12-25",
      day: "Wednesday",
      occasion: "Christmas Day",
      img: christmas,
    },
  ],
};

const annualLeaveSlice = createSlice({
  name: "annualLeave",
  initialState,
  reducers: {
    addHoliday: (state, action) => {
      state.annualLeaves = action.payload;
    },
    deleteHoliday: (state, action) => {
      //   console.log(action.payload);
      if (action.payload !== -1) {
        state.annualLeaves.splice(action.payload, 1);
      }
    },
  },
});

export const { addHoliday, deleteHoliday } = annualLeaveSlice.actions;
export default annualLeaveSlice.reducer;
