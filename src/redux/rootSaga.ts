import {all} from 'redux-saga/effects';
import departmentSaga from './department/saga';
import departmentProductSaga from './product/saga';

export default function* rootSaga() {
  yield all([departmentSaga(), departmentProductSaga()]);
}
