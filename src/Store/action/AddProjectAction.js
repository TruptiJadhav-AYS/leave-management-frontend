import { addProject } from "../slice/ProjectsSlice"
export default function addProjectAction(obj){
    return(dispatch,getState)=>{
        const {Projects}=getState().Project
        console.log(Projects)
        let updatesProjects=[...Projects]
        
        let temp={
            Id:Projects.length+1,  
        }
        let projectObj={...obj,...temp}
        updatesProjects.push(projectObj)
        dispatch(addProject(updatesProjects))
    }
}