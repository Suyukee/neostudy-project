import { useSelector } from 'react-redux';
import {
	selectApplicationId,
	selectApplicationStep,
} from '@/store/application/application-getters';
import DocumentSignSection from '@/components/document-sign-section';
import ErrorPage from '@/pages/error-page';

export default function DocumentSignPage() {
	const applicationId = useSelector(selectApplicationId);
	const applicationStep = useSelector(selectApplicationStep);

	if (!applicationId) return;

	if (applicationStep < 3) return <ErrorPage />;

	return <DocumentSignSection applicationId={applicationId} />;
}
