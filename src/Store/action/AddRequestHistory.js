import { addRequest } from "../slice/PendingRequestsSlice"

function addSendingRequest(obj){
    return(dispatch,getState)=>{
        const {PendingRequestList}=getState().Inventory

        let req={
            id:PendingRequestList.length+1,
        }
        req={...obj,...req}
        const updatedRequest = [...PendingRequestList, req];
        dispatch(addRequest(updatedRequest))
    }
}

export default addSendingRequest