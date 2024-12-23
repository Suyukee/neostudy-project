import { createContext, useEffect, useState } from 'react';
import { AccordionProviderProps } from '@/components/accordion/accordion-types';

export const AccordionContext = createContext({});

export default function AccordionProvider({
	expanded: expandedProp = false,
	onClick,
	children,
}: AccordionProviderProps) {
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		setExpanded(expandedProp);
	}, [expandedProp]);

	return (
		<AccordionContext.Provider value={{ expanded, setExpanded, onClick }}>
			{children}
		</AccordionContext.Provider>
	);
}
