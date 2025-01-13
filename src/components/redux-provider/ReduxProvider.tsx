import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { perstistor } from '@/store';
import { ReduxProviderProps } from '@/components/redux-provider/redux-provider-types';
import Loader from '@/components/loader';

export default function ReduxProvider({ children }: ReduxProviderProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={<Loader />} persistor={perstistor}>
				{children}
			</PersistGate>
		</Provider>
	);
}
