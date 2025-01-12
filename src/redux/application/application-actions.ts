import applicationSlice from '@/redux/application';
import { AppThunk } from '@/types/redux';

const { setApplicationId, setApplicationStep } = applicationSlice.actions;

export const setApplicationIdAction =
	(id: number): AppThunk =>
	(dispatch) => {
		dispatch(setApplicationId(id));
	};

export const setApplicationStepAction =
	(step: number): AppThunk =>
	(dispatch) => {
		dispatch(setApplicationStep(step));
	};
