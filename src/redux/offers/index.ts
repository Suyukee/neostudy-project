import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CardLoanOfferType {
	applicationId: number;
	requestedAmount: number;
	totalAmount: number;
	term: number;
	monthlyPayment: number;
	rate: number;
	isInsuranceEnabled: boolean;
	isSalaryClient: boolean;
}

interface InitialOffersState {
	offers: CardLoanOfferType[];
	chossedOfferId: number | null;
}

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
