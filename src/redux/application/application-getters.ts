import { RootState } from '@/types/redux';

export const selectApplicationId = (state: RootState) => state.application.applicationId;

export const selectApplicationStep = (state: RootState) => state.application.applicationStep;
