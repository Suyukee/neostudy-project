import offersSlice, { CardLoanOfferType } from '@/redux/offers';
import { AppThunk } from '@/types/redux';

const { setCreditOffers, setChossedOfferId } = offersSlice.actions;

export const setCreditOffersAction =
	(offers: CardLoanOfferType[]): AppThunk =>
	(dispatch) => {
		dispatch(setCreditOffers(offers));
	};

export const setChossedOfferIdAction =
	(id: number): AppThunk =>
	(dispatch) => {
		dispatch(setChossedOfferId(id));
	};
