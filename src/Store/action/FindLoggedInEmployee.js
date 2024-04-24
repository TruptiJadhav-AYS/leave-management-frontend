import  { getLogedInEmp} from "../slice/EmployeeSlice";
// import { useGetEmployeesQuery } from "../slice/apiEmployeeSlice";
export default function findLogedInEmployee(email){
    console.log("(((((((((((", email)
    return(dispatch,getState)=>{
        const {Employees}=getState().employees
        // const { data: employees,isLoading,isError} = useGetEmployeesQuery();
        // const Employees= employees || [];
        console.log(Employees)
        let emp=Employees.find(emp => emp.email === email);
        console.log(emp)
        dispatch(getLogedInEmp(emp))
    }
}