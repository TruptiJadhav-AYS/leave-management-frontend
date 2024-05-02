// import { Description } from "@mui/icons-material"
import { editProject } from "../slice/ProjectsSlice"


export default function editProjectAction(newProject){
    return(dispatch,getState)=>{
        const {Projects}=getState().Project
        const {selectedProject}=getState().Project
        let updatedProjects=[...Projects]

        let index=Projects.findIndex(project => project.Id === selectedProject);
          if (index !== -1) {
            if (newProject.Name) updatedProjects[index] = { ...updatedProjects[index], Name: newProject.Name };
            if (newProject.Start_date) updatedProjects[index] ={ ...updatedProjects[index], Start_date: newProject.Start_date };
            if (newProject.Status) updatedProjects[index] = { ...updatedProjects[index], Status: newProject.Status };
            if (newProject.Project_Manager) updatedProjects[index] = { ...updatedProjects[index], Project_Manager: newProject.Project_Manager };
            if (newProject.Description) updatedProjects[index] ={ ...updatedProjects[index], Description: newProject.Description };
            dispatch(editProject(updatedProjects))
          } else {
            return "Project not found"
          }
    }
}