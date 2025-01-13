import { useSelector } from 'react-redux';
import {
	selectApplicationId,
	selectApplicationStep,
} from '@/redux/application/application-getters';
import CodeSection from '@/components/code-section';
import ErrorPage from '@/pages/error-page';

export default function CodePage() {
	const applicationId = useSelector(selectApplicationId);
	const applicationStep = useSelector(selectApplicationStep);

	if (!applicationId) return;

	if (applicationStep < 4) return <ErrorPage />;

	return <CodeSection applicationId={applicationId} />;
}
