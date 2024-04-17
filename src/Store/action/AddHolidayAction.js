import { addHoliday } from "../slice/HolidaysSlice";

function addHol(obj) {
  return (dispatch, getState) => {
    const { annualLeaves } = getState().holidays;

    console.log(getState().annualLeaves);
    let holiday = {
      id: annualLeaves.length + 1,
    };
    holiday = { ...obj, ...holiday };
    // console.log(holiday);
    const updatedHoliday = [...annualLeaves, holiday];
    console.log(updatedHoliday)
    dispatch(addHoliday(updatedHoliday));
  };
}

export default addHol;
