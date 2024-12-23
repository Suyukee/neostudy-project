import { useContext } from 'react';
import TabsProvider, { TabsContext } from '@/components/tabs/TabsContext';
import {
	TabListProps,
	TabPanelProps,
	TabProps,
	TabsProps,
	UseContextTabsType,
} from '@/components/tabs/tabs-types';
import '@/components/tabs/tabs.scss';

export function Tabs({ defaultIndex = 0, children }: TabsProps) {
	return <TabsProvider defaultIndex={defaultIndex}>{children}</TabsProvider>;
}

export function TabList({ classnames, children }: TabListProps) {
	return <div className={`tabs__tabs-list ${classnames}`}>{children}</div>;
}

export function Tab({ index, classnames, children }: TabProps) {
	const { activeTab, setActiveTab }: UseContextTabsType = useContext(TabsContext);

	if (!setActiveTab) return;

	return (
		<button
			className={`tabs-list__tab ${classnames} ${activeTab === index && 'active-tab'}`}
			onClick={() => setActiveTab(index)}
		>
			{children}
		</button>
	);
}

export function TabPanel({ index, classnames, children }: TabPanelProps) {
	const { activeTab }: UseContextTabsType = useContext(TabsContext);

	return activeTab === index ? (
		<div className={`tabs__tab-panel ${classnames}`}>{children}</div>
	) : null;
}
