import { createContext, useState, useContext } from 'react';
import { TabsProviderProps } from '@/components/tabs/tabs-types';

const TabsContext = createContext({});

export const TabsProvider = ({ children, defaultIndex = 0 }: TabsProviderProps) => {
	const [activeTab, setActiveTab] = useState(defaultIndex);

	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>
	);
};

export const useTabs = () => {
	const context = useContext(TabsContext);

	if (!context) {
		throw new Error('useTabs must be used within a TabsProvider');
	}

	return context;
};
