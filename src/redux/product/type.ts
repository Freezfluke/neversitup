export const DEPARTMENT_PRODUCT_CURRENT_REQ = 'DEPARTMENT_PRODUCT_CURRENT_REQ';
export const DEPARTMENT_PRODUCT_CURRENT_SUCCESS =
  'DEPARTMENT_PRODUCT_CURRENT_SUCCESS';
export const DEPARTMENT_PRODUCT_CURRENT_FAIL =
  'DEPARTMENT_PRODUCT_CURRENT_FAIL';


export interface DepartmentProductAction {
  type: string;
  data?: DepartmentProductResponse;
  detailDepartment?: ResponseDepartmentState;
}

interface ResponseDepartmentProduct {
  departmentId: string;
  price: string;
  type: string;
  desc: string;
  name: string;
  imageUrl: string;
  id: string;
}
export interface DepartmentState {
  data?: DepartmentProductResponse;
  loading: boolean;
  error: boolean;
  detailDepartment?: ResponseDepartmentState;
}

export type DepartmentProductResponse = ResponseDepartmentProduct[];

export type RequestIdDepartment = {
  id: string;
  type: string;
};

export interface ResponseDepartmentState {
  name: string;
  imageUrl: string;
  id: string;
}

