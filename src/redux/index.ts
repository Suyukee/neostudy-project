import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commonApi } from '@/services';

export const reducer = combineReducers({
	[commonApi.reducerPath]: commonApi.reducer,
});

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware),
});
