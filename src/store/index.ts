import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import type {AppDispatch, RootState} from 'store/store';
import store from 'store/store';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
