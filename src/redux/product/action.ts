import * as TYPES from './type';

// Define the type of the payload argument

// Define the action creator function
export const getDepartmentProduct = ({id}: {id: string}) => ({
  type: TYPES.DEPARTMENT_PRODUCT_CURRENT_REQ,
  id,
});
