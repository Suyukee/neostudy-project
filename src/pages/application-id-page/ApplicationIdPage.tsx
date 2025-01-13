import { useSelector } from 'react-redux';
import { selectApplicationId } from '@/redux/application/application-getters';
import ScoringSection from '@/components/scoring-section';

export default function ApplicationIdPage() {
	const applicationId = useSelector(selectApplicationId);

	if (!applicationId) return;

	return <ScoringSection applicationId={applicationId} />;
}
