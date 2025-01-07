import { Outlet, useMatch } from 'react-router';
import { useSelector } from 'react-redux';
import { selectCreditOffers } from '@/redux/offers/offersGetters';
import ErrorPage from '@/pages/error-page';

export default function ApplicationIdLayout() {
	const offers = useSelector(selectCreditOffers);
	const applicationId = offers[0].applicationId;

	const applicationIdIsMatch = useMatch(`/loan/${applicationId}/*`);

	if (!applicationIdIsMatch) return <ErrorPage />;

	return (
		<main>
			<Outlet />
		</main>
	);
}
