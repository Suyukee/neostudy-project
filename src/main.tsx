import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import RootLayout from '@/layouts/root-layout';
import Main from '@/components/main/Main';
import '@/globals.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path="/" element={<RootLayout />}>
						<Route index element={<Main />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	</StrictMode>,
);
