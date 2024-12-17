import { TabsProvider, useTabs } from '@/components/tabs/TabsContext';
import {
	TabListProps,
	TabPanelProps,
	TabProps,
	TabsProps,
	UseTabsType,
} from '@/components/tabs/tabs-types';
import '@/components/tabs/tabs.scss';

export const Tabs = ({ defaultIndex = 0, children }: TabsProps) => {
	return <TabsProvider defaultIndex={defaultIndex}>{children}</TabsProvider>;
};

export const TabList = ({ classnames, children }: TabListProps) => {
	return <div className={`tabs__tabs-list ${classnames}`}>{children}</div>;
};

export const Tab = ({ index, classnames, children }: TabProps) => {
	const { activeTab, setActiveTab }: UseTabsType = useTabs();

	if (!setActiveTab) return;

	return (
		<button
			className={`tabs-list__tab ${classnames} ${activeTab === index && 'active-tab'}`}
			onClick={() => setActiveTab(index)}
		>
			{children}
		</button>
	);
};

export const TabPanel = ({ index, classnames, children }: TabPanelProps) => {
	const { activeTab }: UseTabsType = useTabs();
	return activeTab === index ? (
		<div className={`tabs__tab-panel ${classnames}`}>{children}</div>
	) : null;
};
