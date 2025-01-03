import { useRef } from 'react';
import PlatinumCardSection from '@/components/card-section';
import CardTabs from '@/components/card-tabs';
import PrescoringSection from '@/components/prescoring-section';
import '@/pages/loan-page/loan-page.scss';

export default function LoanPage() {
	const prescoringFormRef = useRef<HTMLDivElement | null>(null);

	const handleScrollToPrescoringForm = () => {
		if (!prescoringFormRef.current) return;
		prescoringFormRef.current?.scrollIntoView({
			behavior: 'smooth',
			inline: 'center',
		});
	};
	return (
		<main className="loan">
			<PlatinumCardSection handleClick={handleScrollToPrescoringForm} />
			<CardTabs />
			<div ref={prescoringFormRef}>
				<PrescoringSection />
			</div>
		</main>
	);
}
