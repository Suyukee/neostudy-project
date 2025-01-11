import { useCallback } from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import '@/components/form-element-checkbox/form-element-checkbox.scss';

interface FormElementCheckboxProps {
	name: string;
	id?: string;
	classes?: string;
}

export default function FormElementCheckbox({ name, id, classes }: FormElementCheckboxProps) {
	const { control } = useFormContext();

	const render: ControllerProps['render'] = useCallback(
		({ field }) => {
			return (
				<div className="form-element-checkbox">
					<input
						className={`form-element-checkbox__checkbox ${classes}`}
						{...field}
						name={name}
						type="checkbox"
						id={id}
					/>
				</div>
			);
		},
		[name, classes],
	);

	return <Controller name={name} control={control} render={render} />;
}
