import { ReactNode } from 'react';
import '@/components/tooltip/tooltip.scss';

interface TooltipProps {
	children: ReactNode;
	tooltip: string;
}

export default function Tooltip({ children, tooltip }: TooltipProps) {
	return (
		<div className="tooltip">
			<div className="tooltip__children">{children}</div>
			<div className="tooltip__text">
				<span>{tooltip}</span>
			</div>
		</div>
	);
}
