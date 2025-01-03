import { Provider } from 'react-redux';
import { store } from '@/redux';
import { ReduxProviderProps } from '@/components/redux-provider/redux-provider-types';

export default function ReduxProvider({ children }: ReduxProviderProps) {
	return <Provider store={store}>{children}</Provider>;
}
