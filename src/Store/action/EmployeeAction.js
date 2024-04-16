import  { addEmp ,editEmp,getRole,getLogedInEmp,deleteEmp} from "../slice/EmployeeSlice";

function findLogedInEmployee(id){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees
        let emp=Employees.find(emp => emp.id === id);
        dispatch(getLogedInEmp(emp))
    }
}

function findRole(id){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees
        let emp=Employees.find(emp => emp.id === id);
        if(emp!==-1){
            let role= emp.role
            dispatch(getRole(role))
        }
    }
}

function addEmployee(obj){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees
        let updatedEmployees=[...Employees]

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
        updatedEmployees.push(emp)
        dispatch(addEmp(updatedEmployees))
    }
}

function editEmployee(newEmp){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees
        const {selectedEmp}=getState().employees
        let updatedEmployees=[...Employees]

        let index=Employees.findIndex(emp => emp.id === selectedEmp);

          if (index !== -1) {
            if (newEmp.name) updatedEmployees[index] = { ...updatedEmployees[index], name: newEmp.name };
            if (newEmp.department) updatedEmployees[index] ={ ...updatedEmployees[index], department: newEmp.department };
            if (newEmp.mobile_no) updatedEmployees[index] = { ...updatedEmployees[index], mobile_no: newEmp.mobile_no };
            if (newEmp.email) updatedEmployees[index] = { ...updatedEmployees[index], email: newEmp.email };
            if (newEmp.dob) updatedEmployees[index] ={ ...updatedEmployees[index], dob: newEmp.dob };
            if (newEmp.manager) updatedEmployees[index] = { ...updatedEmployees[index], manager: newEmp.manager };
            if (newEmp.gender) updatedEmployees[index] = { ...updatedEmployees[index], gender: newEmp.gender };
            dispatch(editEmp(updatedEmployees))
          } else {
            return "Employee not found"
          }
    }
}

function deleteEmployee(){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees
        const {selectedEmp}=getState().employees
        let updatedEmployees=[...Employees]
        let index=updatedEmployees.findIndex(emp => emp.id === selectedEmp);
        updatedEmployees.splice(index, 1)
        dispatch(deleteEmp(updatedEmployees))
    }
}

export { addEmployee, editEmployee,findRole ,findLogedInEmployee,deleteEmployee};
