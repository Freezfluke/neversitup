import {takeEvery} from 'redux-saga/effects';
import {getDepartmentProduct} from './middleware';
import * as type from './type';

function* departmentProductSaga() {
  yield takeEvery(type.DEPARTMENT_PRODUCT_CURRENT_REQ, getDepartmentProduct);
}

export default departmentProductSaga;
