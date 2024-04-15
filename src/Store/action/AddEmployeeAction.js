import { addEmp } from "../slice/EmployeeSlice";

function addEmployee(obj){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees

        let role
        if(obj.manager){
            role="employee"  
        }else{
            role="manager"
        }
        let emp={
            id:Employees.length+1,
            role    
        }
        emp={...obj,...emp}
        const updatedEmployees = [...Employees, emp];
        dispatch(addEmp(updatedEmployees))
    }
}

export default addEmployee