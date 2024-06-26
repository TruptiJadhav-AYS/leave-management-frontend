import { deleteInv } from "../slice/InventorySlice";

function deleteInventory(id) {
  return (dispatch, getState) => {
    const { InventoryListItems } = getState().Inventory;

    const inv = InventoryListItems.findIndex((inv) => inv.id === id);
     
    dispatch(deleteInv(inv))

  };
}

export default deleteInventory;