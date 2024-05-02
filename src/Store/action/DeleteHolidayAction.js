import { deleteHoliday } from "../slice/HolidaysSlice";

function deleteHol(id) {
  return (dispatch, getState) => {
    const { annualLeaves } = getState().holidays;

    const hol = annualLeaves.findIndex((hol) => hol.id === id);
     
    dispatch(deleteHoliday(hol))

  };
}

export default deleteHol;