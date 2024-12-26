import { useCallback } from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import ErrorCrossIcon from '@/icons/ErrorCrossIcon';
import { FormElementInputProps } from '@/components/form-element-input/form-element-input-type';
import '@/components/form-element-input/form-element-input.scss';

export default function FormElementInput({
	name,
	type,
	rules,
	placeholder,
	id,
	helperText,
	classes,
}: FormElementInputProps) {
	const { control } = useFormContext();

	const render: ControllerProps['render'] = useCallback(
		({ field: { ref, ...field }, fieldState }) => {
			const value = field.value || '';

			const error = fieldState.error && (fieldState.error.message || helperText || 'Error');

			return (
				<div className="form-element-input">
					<input
						className={`form-element-input__input ${fieldState.error && 'error'} ${classes}`}
						{...field}
						ref={ref}
						type={type}
						value={value}
						placeholder={placeholder}
						id={id}
					/>

					<p className="form-element-input__error">{error}</p>

					{error && (
						<div className="form-element-input__error-icon">
							<ErrorCrossIcon />
						</div>
					)}
				</div>
			);
		},
		[name, type, rules],
	);

	return <Controller name={name} control={control} rules={rules} render={render} />;
}
