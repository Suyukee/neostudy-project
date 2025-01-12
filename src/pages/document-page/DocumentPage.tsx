import { useSelector } from 'react-redux';
import { selectApplicationId } from '@/redux/application/application-getters';
import DocumentSection from '@/components/document-section';

export default function DocumentPage() {
	const applicationId = useSelector(selectApplicationId);

	if (!applicationId) return;

	return <DocumentSection applicationId={applicationId} />;
}
