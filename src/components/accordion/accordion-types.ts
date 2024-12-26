import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface AccordionProviderProps {
	expanded?: boolean;
	onClick?: () => void;
	children: ReactNode;
}

export interface AccordionProps {
	expanded?: boolean;
	onClick?: () => void;
	classes?: string;
	children: ReactNode;
}

export interface AccordionSummaryProps {
	classes?: string;
	children: ReactNode;
}

export interface UseContextAccordionType {
	expanded?: boolean;
	setExpanded?: Dispatch<SetStateAction<boolean>>;
	onClick?: () => void;
}
