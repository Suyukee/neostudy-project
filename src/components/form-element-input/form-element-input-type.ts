import { FieldValues, RegisterOptions, ValidationRule } from 'react-hook-form';

type RulesVariants = RegisterOptions<FieldValues, string> & {
	maxNumber?: ValidationRule<number | string>;
};

export interface FormElementInputProps {
	name: string;
	type?: string;
	rules?: RulesVariants;
	placeholder?: string;
	id?: string;
	disabled?: boolean;
	helperText?: string;
	classes?: string;
}
