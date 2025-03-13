import {put} from 'redux-saga/effects';
import * as TYPES from './type';
import {GET} from '../../services';
import {DEPARTMENT} from '../../services/path';

export function* getDepartment() {
  try {
    const res: TYPES.DepartmentResponse = yield GET(DEPARTMENT);

    yield put<TYPES.DepartmentAction>({
      type: TYPES.DEPARTMENT_CURRENT_SUCCESS,
      data: res,
    });
  } catch (error) {
    yield put<TYPES.DepartmentAction>({type: TYPES.DEPARTMENT_CURRENT_FAIL});
  } finally {
    console.log('Is Successfully');
  }
}
