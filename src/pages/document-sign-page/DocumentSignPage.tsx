import { useSelector } from 'react-redux';
import { selectApplicationId } from '@/redux/application/application-getters';
import DocumentSignSection from '@/components/document-sign-section';

export default function DocumentSignPage() {
	const applicationId = useSelector(selectApplicationId);

	if (!applicationId) return;

	return <DocumentSignSection applicationId={applicationId} />;
}
