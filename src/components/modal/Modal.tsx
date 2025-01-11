import { BaseSyntheticEvent, ReactNode } from 'react';
import '@/components/modal/modal.scss';
import CrossModalIcon from '@/icons/CrossModalIcon';

export interface ModalProps {
	isOpen?: boolean;
	onClose?: () => void;
	title?: string;
	children?: ReactNode | ReactNode[];
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
	const handleClickOnBackdrop = (e: BaseSyntheticEvent) => {
		e.stopPropagation();
	};
	return (
		<div className={`modal ${isOpen && 'open'}`} onClick={onClose}>
			<div className={`modal__dialog ${isOpen && 'open'}`} onClick={handleClickOnBackdrop}>
				<div className="dialog__header">
					<h3 className="header__dialog-title">{title}</h3>
					<button className="header__close-button" onClick={onClose}>
						<CrossModalIcon />
					</button>
				</div>

				<div className="dialog__content">{children}</div>
			</div>
		</div>
	);
}
