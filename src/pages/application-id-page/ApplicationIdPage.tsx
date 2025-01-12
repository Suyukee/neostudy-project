import { useSelector } from 'react-redux';
import ScoringSection from '@/components/scoring-section';
import { selectApplicationId } from '@/redux/application/application-getters';

export default function ApplicationIdPage() {
	const applicationId = useSelector(selectApplicationId);

	if (!applicationId) return;

	return <ScoringSection applicationId={applicationId} />;
}
