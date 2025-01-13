import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialApplicationState } from '@/redux/application/application-types';

const initialState: InitialApplicationState = {
	applicationId: null,
	applicationStep: 0,
};

const applicationSlice = createSlice({
	name: 'application',
	initialState,
	reducers: {
		setApplicationId: (state, action: PayloadAction<number>) => {
			state.applicationId = action.payload;
		},

		setApplicationStep: (state, action: PayloadAction<number>) => {
			state.applicationStep = action.payload;
		},
	},
});

export default applicationSlice;
