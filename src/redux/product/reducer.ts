import * as TYPES from './type';

const initialState: TYPES.DepartmentState = {
  data: [],
  loading: false,
  error: false,
  detailDepartment: {
    imageUrl: '',
    id: '',
    name: '',
  },
};

export const departmentProductReducer = (
  state: TYPES.DepartmentState = initialState,
  action: TYPES.DepartmentProductAction,
): TYPES.DepartmentState => {
  switch (action.type) {
    case TYPES.DEPARTMENT_PRODUCT_CURRENT_REQ:
      return {
        ...state,
        loading: true,
      };
    case TYPES.DEPARTMENT_PRODUCT_CURRENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data ?? [],
        detailDepartment: action.detailDepartment,
      };
    case TYPES.DEPARTMENT_PRODUCT_CURRENT_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
        detailDepartment: {imageUrl: '', id: '', name: ''},
      };

    default:
      return state;
  }
};
