import { useSelector } from 'react-redux';
import { selectCreditOffers } from '@/redux/offers/offersGetters';
import DocumentSection from '@/components/document-section';

export default function DocumentPage() {
	const offers = useSelector(selectCreditOffers);
	const applicationId = offers[0].applicationId;

	return <DocumentSection applicationId={applicationId} />;
}
