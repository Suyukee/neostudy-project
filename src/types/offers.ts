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

export interface InitialOffersState {
	offers: CardLoanOfferType[];
	chossedOfferId: number | null;
}
