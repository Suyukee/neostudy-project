import { maxLength, minLength } from '@/resources/constants';

export class FormRuler {
	static required = {
		required: true,
	};

	static email = {
		validate: (value: string) => {
			const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
			return regExp.test(value);
		},
	};

	static number = {
		valueAsNumber: true,
	};

	static text = {
		validate: (value: string) => {
			const regExp = /^[a-z]+$/i;
			return regExp.test(value);
		},
	};

	static requiredInput = {
		...FormRuler.required,
		minLength: minLength.common,
		maxLength: maxLength.common,
	};

	static requiredNumberInput = {
		...FormRuler.required,
		...FormRuler.number,
	};

	static date = {
		validate: {
			date: (value: string | Date) => {
				const regExp = /^(?:19|20)\d\d([-.])(?:0[1-9]|1[012])\1(?:0[1-9]|[12]\d|3[01])$/;

				return regExp.test(value.toString());
			},
		},
	};

	static adult = {
		validate: {
			date: FormRuler.date.validate.date,

			adult: (value: string | Date) => {
				const now = new Date();
				const birth = new Date(value);

				const age = now.getFullYear() - birth.getFullYear();

				return age >= 18;
			},
		},
	};
}
