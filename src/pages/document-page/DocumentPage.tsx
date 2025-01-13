import { useSelector } from 'react-redux';
import {
	selectApplicationId,
	selectApplicationStep,
} from '@/store/application/application-getters';
import DocumentSection from '@/components/document-section';
import ErrorPage from '@/pages/error-page';

export default function DocumentPage() {
	const applicationId = useSelector(selectApplicationId);
	const applicationStep = useSelector(selectApplicationStep);

	if (!applicationId) return;

	if (applicationStep < 2) return <ErrorPage />;

	return <DocumentSection applicationId={applicationId} />;
}
