import { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectChoosedOfferId, selectCreditOffers } from '@/redux/offers/offers-getters';
import PlatinumCardSection from '@/components/card-section';
import CardTabs from '@/components/card-tabs';
import PrescroingSection from '@/components/prescroing-section';
import '@/pages/loan-page/loan-page.scss';

export default function LoanPage() {
	const prescoringSectionRef = useRef<HTMLDivElement | null>(null);

	const offers = useSelector(selectCreditOffers);
	const choosedOfferId = useSelector(selectChoosedOfferId);

	const step = useMemo(() => {
		if (offers.length === 0) {
			return 'step-1';
		} else if (choosedOfferId === null) {
			return 'step-2';
		} else {
			return 'step-3';
		}
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
			<div ref={prescoringSectionRef}>
				<PrescroingSection step={step} offers={offers} />
			</div>
		</main>
	);
}
