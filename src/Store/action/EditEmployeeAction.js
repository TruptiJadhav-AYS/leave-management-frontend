import  { editEmp} from "../slice/EmployeeSlice";


export default function editEmployee(newEmp){
    return(dispatch,getState)=>{
        let {Employees}=getState().employees
        const {selectedEmp}=getState().employees
        let updatedEmployees=[...Employees]

        console.log("idddd",selectedEmp)

        let index=Employees.findIndex(emp => emp.id === selectedEmp);
        console.log("index",index)
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