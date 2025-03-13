import {createStore, applyMiddleware, Action} from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import {ThunkAction} from 'redux-saga/effects';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
