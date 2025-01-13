import { RootState } from '@/types/store';

export const selectApplicationId = (state: RootState) => state.application.applicationId;

export const selectApplicationStep = (state: RootState) => state.application.applicationStep;
