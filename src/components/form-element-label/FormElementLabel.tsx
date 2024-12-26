import '@/components/form-element-label/form-element-label.scss';

interface FormElementLabelProps {
	required?: boolean;
	forId?: string;
	children: string;
}

export default function FormElementLabel({
	required = false,
	forId,
	children,
}: FormElementLabelProps) {
	return (
		<label className="form-element-label" htmlFor={forId}>
			{children}
			{required && <span className="form-element-label__span"> *</span>}
		</label>
	);
}
