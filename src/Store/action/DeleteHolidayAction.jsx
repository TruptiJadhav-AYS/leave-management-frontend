import { deleteHoliday } from "../slice/HolidaysSlice";

function deleteHol(id) {
  return (dispatch, getState) => {
    const { annualLeaves } = getState().holidays;

    const hol = annualLeaves.findIndex((hol) => hol.id === id);
    console.log(hol)
     
    dispatch(deleteHoliday(hol))

  };
}

export default deleteHol;