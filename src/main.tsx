import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import RootLayout from '@/layouts/root-layout';
import MainPage from '@/pages/main-page/';
import LoanPage from '@/pages/loan-page';
import ErrorPage from '@/pages/error-page';
import '@/assets/globals.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path="/" element={<RootLayout />}>
						<Route index element={<MainPage />} />
						<Route path="/loan" element={<LoanPage />} />
						<Route path="*" element={<ErrorPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	</StrictMode>,
);
