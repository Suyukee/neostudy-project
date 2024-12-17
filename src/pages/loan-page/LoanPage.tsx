import PlatinumCardSection from '@/components/card-section';
import CardTabs from '@/components/card-tabs';
import '@/pages/loan-page/loan-page.scss';

export default function LoanPage() {
	return (
		<main className="loan">
			<PlatinumCardSection />
			<CardTabs />
		</main>
	);
}
