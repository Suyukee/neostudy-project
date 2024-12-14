import CardsDesign from '@/components/design-section';
import FeaturesSection from '@/components/features-section';
import CurrencySection from '@/components/currency-section';
import WorldMapSection from '@/components/world-map-section';
import NewsSection from '@/components/news-section';
import ContactsSection from '@/components/contacts-section';
import '@/pages/main-page/main-page.scss';

export default function MainPage() {
	return (
		<main className="main">
			<CardsDesign />
			<div className="main__info">
				<FeaturesSection />
				<CurrencySection />
				<WorldMapSection />
				<NewsSection />
				<ContactsSection />
			</div>
		</main>
	);
}
