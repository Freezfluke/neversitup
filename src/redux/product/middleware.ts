import {put, select} from 'redux-saga/effects';
import * as TYPES from './type';
import {GET} from '../../services';
import {DEPARTMENT_PRODUCT} from '../../services/path';
import {RootState} from '../store';

export function* getDepartmentProduct({id}: TYPES.RequestIdDepartment) {
  try {
    const state: RootState = yield select();

    const res: TYPES.DepartmentProductResponse = yield GET(
      DEPARTMENT_PRODUCT(id),
    );

    const detailDepartment = state.department.data.find(
      (e: TYPES.ResponseDepartmentState) => e.id === id,
    );

    yield put<TYPES.DepartmentProductAction>({
      type: TYPES.DEPARTMENT_PRODUCT_CURRENT_SUCCESS,
      data: res,
      detailDepartment: detailDepartment,
    });
  } catch (error) {
    yield put<TYPES.DepartmentProductAction>({
      type: TYPES.DEPARTMENT_PRODUCT_CURRENT_FAIL,
    });
  } finally {
    console.log('Is Successfully');
  }
}
