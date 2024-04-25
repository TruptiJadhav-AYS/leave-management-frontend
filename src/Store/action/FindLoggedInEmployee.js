import  { getLogedInEmp} from "../slice/EmployeeSlice";
// import { useGetEmployeesQuery } from "../slice/apiEmployeeSlice";
export default function findLogedInEmployee(email){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees
        // const { data: employees,isLoading,isError} = useGetEmployeesQuery();
        // const Employees= employees || [];

        let emp=Employees.find(emp => emp.email === email);
        dispatch(getLogedInEmp(emp))
    }
}