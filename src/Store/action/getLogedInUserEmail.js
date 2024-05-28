import { getLogedInEmp } from "../slice/EmployeeSlice";

export default function getLogedInUserId(id) {
  return (dispatch) => {
    dispatch(getLogedInEmp(id));
  };
}