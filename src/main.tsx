import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import ReduxProvider from '@/components/redux-provider';
import RootLayout from '@/layouts/root-layout';
import MainPage from '@/pages/main-page/';
import LoanPage from '@/pages/loan-page';
import ErrorPage from '@/pages/error-page';
import ApplicationIdPage from '@/pages/application-id-page';
import '@/assets/globals.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReduxProvider>
			<BrowserRouter>
				<Suspense fallback={<p>Loading...</p>}>
					<Routes>
						<Route element={<RootLayout />}>
							<Route index element={<MainPage />} />
							<Route path="loan" element={<LoanPage />} />
							<Route path="loan/:applicationId" element={<ApplicationIdPage />} />
							<Route path="*" element={<ErrorPage />} />
						</Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</ReduxProvider>
	</StrictMode>,
);
