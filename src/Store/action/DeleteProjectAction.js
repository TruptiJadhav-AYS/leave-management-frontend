import { deleteProject } from "../slice/ProjectsSlice"

export default function deleteProjectAction(){
    return(dispatch,getState)=>{
        const {Projects}=getState().Project
        const {selectedProject}=getState().Project
        let updatedProject=[...Projects]
        let index=updatedProject.findIndex(project => project.Id === selectedProject);
        updatedProject.splice(index, 1)
        dispatch(deleteProject(updatedProject))
    }
}
