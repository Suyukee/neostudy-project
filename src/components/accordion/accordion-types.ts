import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface AccordionProviderProps {
	children: ReactNode;
}

export interface AccordionProps {
	classnames?: string;
	children: ReactNode;
}

export interface AccordionSummaryProps {
	classnames?: string;
	children: ReactNode;
}

export interface UseContextAccordionType {
	expanded?: boolean;
	setExpanded?: Dispatch<SetStateAction<boolean>>;
}
