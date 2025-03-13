export const DEPARTMENT_CURRENT_REQ = 'DEPARTMENT_CURRENT_REQ';
export const DEPARTMENT_CURRENT_SUCCESS = 'DEPARTMENT_CURRENT_SUCCESS';
export const DEPARTMENT_CURRENT_FAIL = 'DEPARTMENT_CURRENT_FAIL';


export interface DepartmentAction {
  type: string;
  data?: DepartmentResponse;
}
interface ResponseDepartment {
  name: string;
  imageUrl: string;
  id: string;
}

export interface DepartmentState {
    data: DepartmentResponse
    loading: boolean
    error: boolean
}

export type DepartmentResponse = ResponseDepartment[];
