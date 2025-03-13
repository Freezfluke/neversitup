import { takeEvery } from 'redux-saga/effects';
import { getDepartment } from './middleware';
import * as type from './type';

function* departmentSaga() {
  yield takeEvery(type.DEPARTMENT_CURRENT_REQ ,getDepartment);
}

export default departmentSaga;
