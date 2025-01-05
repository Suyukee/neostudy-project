import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import ReduxProvider from '@/components/redux-provider';
import Loader from '@/components/loader';
import Router from '@/components/router';
import '@/assets/globals.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReduxProvider>
			<Suspense fallback={<Loader />}>
				<Router />
			</Suspense>
		</ReduxProvider>
	</StrictMode>,
);
