import CardsSection from '@/components/card-section';
import CurrencySection from '@/components/currency-section';
import FeaturesSection from '@/components/features-section';
import WorldMapSection from '@/components/world-map-section';
import '@/pages/main-page/main-page.scss';

export default function MainPage() {
	return (
		<main className="main">
			<CardsSection />
			<div className="main__info">
				<FeaturesSection />
				<CurrencySection />
				<WorldMapSection />
			</div>
		</main>
	);
}
