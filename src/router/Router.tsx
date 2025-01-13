import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import RootLayout from '@/layouts/root-layout';
import MainPage from '@/pages/main-page/';
import LoanLayout from '@/layouts/loan-layout';
import LoanPage from '@/pages/loan-page';
import ApplicationIdLayout from '@/layouts/application-id-layout';
import ApplicationIdPage from '@/pages/application-id-page';
import DocumentPage from '@/pages/document-page';
import DocumentSignPage from '@/pages/document-sign-page';
import CodePage from '@/pages/code-page';
import ErrorPage from '@/pages/error-page';

export default function Router() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<RootLayout />}>
				<Route index element={<MainPage />} />
				<Route path="loan" element={<LoanLayout />}>
					<Route index element={<LoanPage />} />
					<Route path=":applicationId" element={<ApplicationIdLayout />}>
						<Route index element={<ApplicationIdPage />} />
						<Route path="document">
							<Route index element={<DocumentPage />} />
							<Route path="sign" element={<DocumentSignPage />} />
						</Route>
						<Route path="code" element={<CodePage />} />
					</Route>
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Route>,
		),
	);

	return <RouterProvider router={router} />;
}
