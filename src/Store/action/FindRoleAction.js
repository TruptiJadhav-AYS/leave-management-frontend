import  { getRole} from "../slice/EmployeeSlice";


export default function findRole(id){
    return(dispatch,getState)=>{
        const {Employees}=getState().employees
        let emp=Employees.find(emp => emp.id === id);
        if(emp!==-1){
            let role= emp.role
            dispatch(getRole(role))
        }
    }
}