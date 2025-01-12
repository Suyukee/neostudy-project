import offersSlice from '@/redux/offers';
import { AppThunk } from '@/types/redux';
import { CardLoanOfferType } from '@/types/offers';

const { setCreditOffers, setChoosedOfferId } = offersSlice.actions;

export const setCreditOffersAction =
	(offers: CardLoanOfferType[]): AppThunk =>
	(dispatch) => {
		dispatch(setCreditOffers(offers));
	};

export const setChoosedOfferIdAction =
	(id: number): AppThunk =>
	(dispatch) => {
		dispatch(setChoosedOfferId(id));
	};
