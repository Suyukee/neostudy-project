import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import RootLayout from '@/layouts/root-layout';
import MainPage from '@/pages/main-page/';
import LoanPage from '@/pages/loan-page';
import ErrorPage from '@/pages/error-page';
import ApplicationIdPage from '@/pages/application-id-page';

export default function Router() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<RootLayout />}>
				<Route index element={<MainPage />} />
				<Route path="loan" element={<LoanPage />} />
				<Route path="loan/:applicationId" element={<ApplicationIdPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>,
		),
	);

	return <RouterProvider router={router} />;
}
