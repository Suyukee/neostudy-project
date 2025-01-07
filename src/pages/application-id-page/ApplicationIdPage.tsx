import { useMatch } from 'react-router';
import { useSelector } from 'react-redux';
import { selectCreditOffers } from '@/redux/offers/offersGetters';
import ErrorPage from '@/pages/error-page';
import ScoringSection from '@/components/scoring-section';
import '@/pages/application-id-page/application-id-page.scss';

export default function ApplicationIdPage() {
	const offers = useSelector(selectCreditOffers);
	const applicationId = offers[0].applicationId;

	const applicationIdIsMatch = useMatch(`/loan/${applicationId}`);

	if (!applicationIdIsMatch) return <ErrorPage />;

	return (
		<main className="application-id">
			<ScoringSection applicationId={applicationId} />
		</main>
	);
}
