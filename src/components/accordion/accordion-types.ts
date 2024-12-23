import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface AccordionProviderProps {
	expanded?: boolean;
	onClick?: () => void;
	children: ReactNode;
}

export interface AccordionProps {
	expanded?: boolean;
	onClick?: () => void;
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
	onClick?: () => void;
}
