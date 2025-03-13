import {combineReducers} from 'redux';
import {departmentReducer} from './department/reducer';
import {departmentProductReducer} from './product/reducer';

const rootReducer = combineReducers({
  department: departmentReducer,
  departmentProduct: departmentProductReducer,
});

export default rootReducer;
