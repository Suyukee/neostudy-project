import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface TabsProviderProps {
	children: ReactNode;
	defaultIndex: number;
}

export interface TabsProps {
	defaultIndex?: number;
	children: ReactNode;
}

export interface TabListProps {
	classes?: string;
	children: ReactNode;
}

export interface TabProps {
	index: number;
	classes?: string;
	children: ReactNode;
}

export interface TabPanelProps {
	index: number;
	classes?: string;
	children: ReactNode;
}

export interface UseContextTabsType {
	activeTab?: number;
	setActiveTab?: Dispatch<SetStateAction<number>>;
}
