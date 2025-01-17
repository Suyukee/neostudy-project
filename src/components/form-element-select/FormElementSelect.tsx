import { useCallback } from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import SelectArrowIcon from '@/icons/SelectArrowIcon';
import { FormElementSelectProps } from '@/components/form-element-select/form-element-select-type';
import '@/components/form-element-select/form-element-select.scss';

export default function FormElementSelect({
	name,
	rules,
	id,
	values,
	disabled,
	classes,
}: FormElementSelectProps) {
	const { control } = useFormContext();

	const renderChildren = useCallback(() => {
		if (!values.length) {
			return (
				<option disabled value={''}>
					Пусто
				</option>
			);
		}

		return values.map((a) => (
			<option key={a.value} value={a.value}>
				{a.label}
			</option>
		));
	}, [values]);

	const render: ControllerProps['render'] = useCallback(
		({ field: { ref, ...field } }) => {
			const value = field.value || '';

			return (
				<div className="form-element-select">
					<select
						className={`form-element-select__select ${classes}`}
						{...field}
						ref={ref}
						value={value}
						id={id}
						disabled={disabled}
					>
						{renderChildren()}
					</select>

					<div className="form-element-select__icon">
						<SelectArrowIcon />
					</div>
				</div>
			);
		},
		[name, rules],
	);

	return <Controller name={name} control={control} rules={rules} render={render} />;
}
