import { FieldValues, RegisterOptions, ValidationRule } from 'react-hook-form';

type RulesVariants = RegisterOptions<FieldValues, string> & {
	maxNumber?: ValidationRule<number | string>;
};

export interface FormElementSelectProps {
	name: string;
	rules?: RulesVariants;
	id?: string;
	values: { label: string; value: string | number }[];
	disabled?: boolean;
	classes?: string;
}
