import store from '@/store';
import { ThunkAction, UnknownAction } from '@reduxjs/toolkit';

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	UnknownAction
>;
