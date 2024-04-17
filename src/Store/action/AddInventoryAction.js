import { addInventory } from "../slice/InventorySlice"

function addInventorynew(obj){
    return(dispatch,getState)=>{
        const {InventoryListItems}=getState().Inventory

        
        let inv={
            id:InventoryListItems.length+1,
        }
        inv={...obj,...inv}
        const updatedInventory = [...InventoryListItems, inv];
        dispatch(addInventory(updatedInventory))
    }
}

export default addInventorynew