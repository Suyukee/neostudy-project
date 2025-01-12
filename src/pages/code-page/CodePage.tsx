import { useSelector } from 'react-redux';
import { selectApplicationId } from '@/redux/application/application-getters';
import CodeSection from '@/components/code-section';

export default function CodePage() {
	const applicationId = useSelector(selectApplicationId);

	if (!applicationId) return;

	return <CodeSection applicationId={applicationId} />;
}
