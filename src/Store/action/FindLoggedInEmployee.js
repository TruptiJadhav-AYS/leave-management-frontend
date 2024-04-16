import  { getLogedInEmp} from "../slice/EmployeeSlice";

export default function findLogedInEmployee(id){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees
        let emp=Employees.find(emp => emp.id === id);
        dispatch(getLogedInEmp(emp))
    }
}