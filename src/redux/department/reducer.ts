import * as TYPES from './type';

const initialState: TYPES.DepartmentState = {
  data: [],
  loading: false,
  error: false,
};

export const departmentReducer = (
  state: TYPES.DepartmentState = initialState,
  action: TYPES.DepartmentAction,
): TYPES.DepartmentState => {
  switch (action.type) {
    case TYPES.DEPARTMENT_CURRENT_REQ:
      return {
        ...state,
        loading: true,
      };
    case TYPES.DEPARTMENT_CURRENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data ?? [],
      };
    case TYPES.DEPARTMENT_CURRENT_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
      };
    default:
      return state;
  }
};
