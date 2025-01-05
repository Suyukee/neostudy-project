import { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectChoosedOfferId, selectCreditOffers } from '@/redux/offers/offersGetters';
import PlatinumCardSection from '@/components/card-section';
import CardTabs from '@/components/card-tabs';
import PrescoringFormSection from '@/components/prescoring-form-section';
import CardLoanOffersSection from '@/components/card-loan-offers-section';
import '@/pages/loan-page/loan-page.scss';

export default function LoanPage() {
	const prescoringSectionRef = useRef<HTMLDivElement | null>(null);

	const offers = useSelector(selectCreditOffers);
	const choosedOfferId = useSelector(selectChoosedOfferId);

	const step = useMemo(() => {
		return offers.length === 0 ? 'step-1' : choosedOfferId === null ? 'step-2' : 'step-3';
	}, [offers, choosedOfferId]);

	const handleScrollToPrescoringSection = () => {
		if (!prescoringSectionRef.current) return;
		prescoringSectionRef.current?.scrollIntoView({
			behavior: 'smooth',
			inline: 'center',
		});
	};

	return (
		<main className="loan">
			<PlatinumCardSection step={step} handleClick={handleScrollToPrescoringSection} />
			<CardTabs />
			<article className="prescoring-section" ref={prescoringSectionRef}>
				{step === 'step-1' && <PrescoringFormSection />}
				{step === 'step-2' && <CardLoanOffersSection offers={offers} />}
				{step === 'step-3' && <h1>Step 3</h1>}
			</article>
		</main>
	);
}
