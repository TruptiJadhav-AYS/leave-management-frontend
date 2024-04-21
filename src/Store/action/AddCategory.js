import { addCategory } from "../slice/CategorySlice";

function addCategoryNew(value) {
  return (dispatch, getState) => {
    const { CategoryList } = getState().Category;

    console.log(getState().CategoryList);
    let category = {
      id: CategoryList.length + 1,
      name:value
    };
    // category = { ...obj, ...category };
    // console.log(holiday);
    const updatedCategory = [...CategoryList, category];
    console.log(updatedCategory)
    dispatch(addCategory(updatedCategory));
  };
}

export default addCategoryNew;