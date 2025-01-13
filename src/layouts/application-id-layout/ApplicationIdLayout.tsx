import { Outlet, useMatch } from 'react-router';
import { useSelector } from 'react-redux';
import { selectApplicationId } from '@/store/application/application-getters';
import ErrorPage from '@/pages/error-page';

export default function ApplicationIdLayout() {
	const applicationId = useSelector(selectApplicationId);

	const applicationIdIsMatch = useMatch(`/loan/${applicationId}/*`);

	if (!applicationIdIsMatch) return <ErrorPage />;

	return (
		<main>
			<Outlet />
		</main>
	);
}
