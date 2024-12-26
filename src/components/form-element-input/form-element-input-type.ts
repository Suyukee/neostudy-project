import { FieldValues, RegisterOptions, ValidationRule } from 'react-hook-form';

export type RulesVariants = RegisterOptions<FieldValues, string> & {
	maxNumber?: ValidationRule<number | string>;
};

export interface FormElementInputProps {
	name: string;
	type?: string;
	rules?: RulesVariants;
	placeholder?: string;
	id?: string;
	helperText?: string;
	classes?: string;
}
