import { deleteEmp } from "../slice/EmployeeSlice"

export default function deleteEmployee(){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees
        const {selectedEmp}=getState().employees
        let updatedEmployees=[...Employees]
        let index=updatedEmployees.findIndex(emp => emp.id === selectedEmp);
        updatedEmployees.splice(index, 1)
        dispatch(deleteEmp(updatedEmployees))
    }
}
