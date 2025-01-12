import { RootState } from '@/types/redux';

export const selectCreditOffers = (state: RootState) => state.offers.offers;

export const selectChoosedOfferId = (state: RootState) => state.offers.choosedOfferId;
