import EmployeeSlice, { addEmp ,editEmp} from "../slice/EmployeeSlice";

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

function editEmployee(newEmp){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees

        let index=Employees.find(emp => emp.id === newEmp.id);
        if (index !== -1) {
            // Update the employee's properties
            Employees[index].name = newEmp.name;
            Employees[index].department = newEmp.department;
            Employees[index].mobile_no=newEmp.mobile_no
            Employees[index].email=newEmp.email
            Employees[index].dob=newEmp.dob
            Employees[index].manager=newEmp.manager
            Employees[index].gender=newEmp.gender
            dispatch(editEmp(Employees))
          } else {
            return "Employee not found"
          }
    }
}

export { addEmployee, editEmployee };
