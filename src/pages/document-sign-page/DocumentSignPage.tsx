import { useSelector } from 'react-redux';
import { selectCreditOffers } from '@/redux/offers/offersGetters';
import DocumentSignSection from '@/components/document-sign-section';

export default function DocumentSignPage() {
	const offers = useSelector(selectCreditOffers);
	const applicationId = offers[0].applicationId;

	return <DocumentSignSection applicationId={applicationId} />;
}
