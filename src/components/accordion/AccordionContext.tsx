import { createContext, useState } from 'react';
import { AccordionProviderProps } from '@/components/accordion/accordion-types';

export const AccordionContext = createContext({});

export default function AccordionProvider({ children }: AccordionProviderProps) {
	const [expanded, setExpanded] = useState(false);

	return (
		<AccordionContext.Provider value={{ expanded, setExpanded }}>
			{children}
		</AccordionContext.Provider>
	);
}
