import { useSelector } from 'react-redux';
import { selectApplicationId } from '@/redux/application/application-getters';

export default function CodePage() {
	const applicationId = useSelector(selectApplicationId);

	if (!applicationId) return;

	return <div>CodePage</div>;
}
