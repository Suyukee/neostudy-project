interface Props {
	direction?: 'asc' | 'desc';
}

export default function TableSortArrowIcon({ direction = 'asc' }: Props) {
	return (
		<svg
			width="10"
			height="6"
			viewBox="0 0 10 6"
			transform={direction === 'desc' ? 'rotate(180)' : ''}
		>
			<path
				d="M5.19206 0.230466L8.90654 4.68785C9.34076 5.20891 8.97024 6 8.29197 6L1.70803 6C1.02976 6 0.659237 5.20892 1.09346 4.68785L4.80794 0.230466C4.90789 0.110528 5.09211 0.110528 5.19206 0.230466Z"
				fill="#222222"
			/>
		</svg>
	);
}
