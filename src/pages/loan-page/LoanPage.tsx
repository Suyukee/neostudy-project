import PlatinumCardSection from '@/components/card-section';
import CardTabs from '@/components/card-tabs';
import PrescoringSection from '@/components/prescoring-section';
import '@/pages/loan-page/loan-page.scss';

export default function LoanPage() {
	return (
		<main className="loan">
			<PlatinumCardSection />
			<CardTabs />
			<PrescoringSection />
		</main>
	);
}
