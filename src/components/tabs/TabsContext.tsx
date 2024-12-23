import { createContext, useState } from 'react';
import { TabsProviderProps } from '@/components/tabs/tabs-types';

export const TabsContext = createContext({});

export default function TabsProvider({ children, defaultIndex = 0 }: TabsProviderProps) {
	const [activeTab, setActiveTab] = useState(defaultIndex);

	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>
	);
}
