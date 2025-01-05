import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/redux/hooks';
import { setCreditOffersAction } from '@/redux/offers/offersActions';
import { usePostApplicationMutation } from '@/services/application/application';
import { FormRuler } from '@/utils/FormRuler';
import { PrescoringData } from '@/services/application/application-types';
import Form from '@/components/form';
import FormElementLabel from '@/components/form-element-label';
import FormElementInput from '@/components/form-element-input';
import FormElementSelect from '@/components/form-element-select';
import Divider from '@/components/divider';
import Loader from '@/components/loader';
import '@/components/prescoring-form-section/prescoring-form-section.scss';

export default function PrescoringFormSection() {
	const methods = useForm<PrescoringData>({
		mode: 'onBlur',
		defaultValues: {
			amount: 150000,
			term: 6,
		},
	});

	methods.watch('amount');

	const termOptions = [
		{ label: '6 month', value: 6 },
		{ label: '12 month', value: 12 },
		{ label: '18 month', value: 18 },
		{ label: '24 month', value: 24 },
	];

	const dispatch = useAppDispatch();

	const [postApplication, { isLoading }] = usePostApplicationMutation();

	const handleSubmit = async (data: PrescoringData) => {
		try {
			const { data: offers } = await postApplication(data);

			if (offers) {
				dispatch(setCreditOffersAction(offers));
			}
		} catch (error) {
			console.error(error);
		}
	};

	if (isLoading) return <Loader />;

	return (
		<Form classes="prescoring-form" onSubmit={handleSubmit} contextMethods={methods}>
			<div className="prescoring-form__customize-card">
				<div className="customize-card__amount">
					<div className="amount__title">
						<h2>Customize your card</h2>
						<p>Step 1 of 5</p>
					</div>

					<div className="amount__select">
						<FormElementLabel forId="amount">Select amount</FormElementLabel>
						<FormElementInput
							name="amount"
							type="number"
							id="amount"
							helperText="Enter amount"
							rules={{
								...FormRuler.requiredNumberInput,
								min: 15000,
								max: 600000,
							}}
						/>
					</div>
				</div>

				<hr className="customize-card__hr" />

				<div className="customize-card__text-value">
					<h4>You have chosen the amount</h4>
					<p>{Number(methods.getValues().amount).toLocaleString()} ₽</p>
					<div className="text-value__divider">
						<Divider color="secondary" />
					</div>
				</div>
			</div>

			<div className="prescoring-form__contact-info">
				<h4 className="contact-info__title">Contact Information</h4>

				<div className="contact-info__contact-form">
					<div className="contact-form__item">
						<FormElementLabel forId="lastName" required>
							Your last name
						</FormElementLabel>
						<FormElementInput
							name="lastName"
							type="text"
							id="lastName"
							placeholder="Doe"
							helperText="Enter your last name"
							rules={{
								...FormRuler.requiredInput,
								...FormRuler.text,
							}}
						/>
					</div>

					<div className="contact-form__item">
						<FormElementLabel forId="firstName" required>
							Your first name
						</FormElementLabel>
						<FormElementInput
							name="firstName"
							type="text"
							id="firstName"
							placeholder="Jhon"
							helperText="Enter your first name"
							rules={{ ...FormRuler.requiredInput, ...FormRuler.text }}
						/>
					</div>

					<div className="contact-form__item">
						<FormElementLabel forId="middleName">Your patronymic</FormElementLabel>
						<FormElementInput
							name="middleName"
							type="text"
							id="middleName"
							placeholder="Victorovich"
							helperText="Incorrect middle name"
							rules={{ ...FormRuler.text }}
						/>
					</div>

					<div className="contact-form__item">
						<FormElementLabel forId="term" required>
							Select term
						</FormElementLabel>
						<FormElementSelect
							name="term"
							id="term"
							values={termOptions}
							rules={{ ...FormRuler.required }}
						/>
					</div>

					<div className="contact-form__item">
						<FormElementLabel forId="email" required>
							Your email
						</FormElementLabel>
						<FormElementInput
							name="email"
							type="email"
							id="email"
							placeholder="test@gmail.com"
							helperText="Incorrect email address"
							rules={{
								...FormRuler.requiredInput,
								...FormRuler.email,
							}}
						/>
					</div>

					<div className="contact-form__item">
						<FormElementLabel forId="birthdate" required>
							Your date of birth
						</FormElementLabel>
						<FormElementInput
							name="birthdate"
							type="date"
							id="birthdate"
							helperText="Incorrect date of birth"
							rules={{
								...FormRuler.requiredInput,
								...FormRuler.adult,
							}}
						/>
					</div>

					<div className="contact-form__item">
						<FormElementLabel forId="passportSeries" required>
							Your passport series
						</FormElementLabel>
						<FormElementInput
							name="passportSeries"
							type="text"
							id="passportSeries"
							placeholder="0000"
							helperText="The series must be 4 digits"
							rules={{
								...FormRuler.requiredNumberInput,
								minLength: 4,
								maxLength: 4,
							}}
						/>
					</div>

					<div className="contact-form__item">
						<FormElementLabel forId="passportNumber" required>
							Your passport number
						</FormElementLabel>
						<FormElementInput
							name="passportNumber"
							type="text"
							id="passportNumber"
							placeholder="000000"
							helperText="The series must be 6 digits"
							rules={{
								...FormRuler.requiredNumberInput,
								minLength: 6,
								maxLength: 6,
							}}
						/>
					</div>
				</div>

				<div className="contact-info__button">
					<button className="button-primary" type="submit">
						Continue
					</button>
				</div>
			</div>
		</Form>
	);
}
