import { useSelector } from 'react-redux';
import { selectCreditOffers } from '@/redux/offers/offersGetters';
import ScoringSection from '@/components/scoring-section';

export default function ApplicationIdPage() {
	const offers = useSelector(selectCreditOffers);
	const applicationId = offers[0].applicationId;

	return <ScoringSection applicationId={applicationId} />;
}