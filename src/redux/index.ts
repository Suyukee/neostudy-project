import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commonApi from '@/services';
import offersSlice from '@/redux/offers';
import applicationSlice from '@/redux/application';

const rootReducer = combineReducers({
	[commonApi.reducerPath]: commonApi.reducer,
	offers: offersSlice.reducer,
	application: applicationSlice.reducer,
});

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: ['offers', 'application'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(commonApi.middleware),
});

export const perstistor = persistStore(store);
export default store;
