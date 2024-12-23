export default function AccordionArrowIcon({ isOpen = false }: { isOpen?: boolean }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			transform={isOpen ? 'rotate(180)' : ''}
		>
			<path d="M6 9L12 15L18 9" stroke="#33363F" stroke-width="2" />
		</svg>
	);
}
