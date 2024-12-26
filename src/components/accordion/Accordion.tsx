import { useContext } from 'react';
import AccordionProvider, { AccordionContext } from '@/components/accordion/AccordionContext';
import AccordionArrowIcon from '@/icons/AccordionArrowIcon';
import {
	AccordionProps,
	AccordionSummaryProps,
	UseContextAccordionType,
} from '@/components/accordion/accordion-types';
import '@/components/accordion/accordion.scss';

export function Accordion({ expanded, onClick, classes, children }: AccordionProps) {
	return (
		<AccordionProvider expanded={expanded} onClick={onClick}>
			<div className={`accordion ${classes}`}>{children}</div>
		</AccordionProvider>
	);
}

export function AccordionSummary({ classes, children }: AccordionSummaryProps) {
	const { expanded, setExpanded, onClick }: UseContextAccordionType = useContext(AccordionContext);

	if (!setExpanded) return;

	const handleClick = () => {
		if (onClick) {
			onClick();
		} else {
			setExpanded(!expanded);
		}
	};

	return (
		<div
			className={`accordion__accordion-summary ${expanded && 'expanded'} ${classes}`}
			onClick={handleClick}
		>
			{children} <AccordionArrowIcon isOpen={expanded} />
		</div>
	);
}

export function AccordionDetails({ classes, children }: AccordionSummaryProps) {
	const { expanded }: UseContextAccordionType = useContext(AccordionContext);

	return (
		<div className={`accordion__accordion-details ${expanded && 'expanded'} ${classes}`}>
			{children}
		</div>
	);
}
