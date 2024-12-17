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
	classnames?: string;
	children: ReactNode;
}

export interface TabProps {
	index: number;
	classnames?: string;
	children: ReactNode;
}

export interface TabPanelProps {
	index: number;
	classnames?: string;
	children: ReactNode;
}

export interface UseTabsType {
	activeTab?: number;
	setActiveTab?: Dispatch<SetStateAction<number>>;
}
