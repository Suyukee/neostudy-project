import { CardLoanOfferType, InitialOffersState } from '@/types/offers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialOffersState = {
	offers: [],
	chossedOfferId: null,
};

const offersSlice = createSlice({
	name: 'offers',
	initialState,
	reducers: {
		setCreditOffers: (state, action: PayloadAction<CardLoanOfferType[]>) => {
			state.offers = action.payload;
		},
		setChossedOfferId: (state, action: PayloadAction<number>) => {
			state.chossedOfferId = action.payload;
		},
	},
});

export default offersSlice;
