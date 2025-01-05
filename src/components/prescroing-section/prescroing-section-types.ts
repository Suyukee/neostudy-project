import { CardLoanOfferType } from '@/types/offers';

export interface PrescroingSectionProps {
	step: 'step-1' | 'step-2' | 'step-3';
	offers: CardLoanOfferType[];
}
