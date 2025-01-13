import { RootState } from '@/types/store';

export const selectCreditOffers = (state: RootState) => state.offers.offers;

export const selectChoosedOfferId = (state: RootState) => state.offers.choosedOfferId;
