import { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

interface FormProps<TFieldValues extends FieldValues> {
	contextMethods: UseFormReturn<TFieldValues>;
	onSubmit: SubmitHandler<TFieldValues>;
	classes?: string;
	children: ReactNode | ReactNode[];
}

export default function Form<TFieldValues extends FieldValues>({
	contextMethods,
	onSubmit,
	classes,
	children,
}: FormProps<TFieldValues>) {
	const methods = contextMethods;

	return (
		<FormProvider {...methods}>
			<form className={`${classes}`} onSubmit={methods.handleSubmit(onSubmit)}>
				{children}
			</form>
		</FormProvider>
	);
}
