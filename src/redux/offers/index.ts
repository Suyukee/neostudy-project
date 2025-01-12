import { CardLoanOfferType, InitialOffersState } from '@/types/offers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialOffersState = {
	offers: [],
	choosedOfferId: null,
};

const offersSlice = createSlice({
	name: 'offers',
	initialState,
	reducers: {
		setCreditOffers: (state, action: PayloadAction<CardLoanOfferType[]>) => {
			state.offers = action.payload;
		},

		setChoosedOfferId: (state, action: PayloadAction<number>) => {
			state.choosedOfferId = action.payload;
		},
	},
});

export default offersSlice;
