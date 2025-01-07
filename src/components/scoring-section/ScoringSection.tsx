import { useForm } from 'react-hook-form';
import { usePutApplicationRegistrationMutation } from '@/services/application/application';
import { ScoringForm } from '@/services/application/application-types';
import { FormRuler } from '@/utils/FormRuler';
import { ScoringFormProps } from '@/components/scoring-section/scoring-section-types';
import Form from '@/components/form';
import FormElementLabel from '@/components/form-element-label';
import FormElementSelect from '@/components/form-element-select';
import FormElementInput from '@/components/form-element-input';
import Loader from '@/components/loader';
import LoanStepMessage from '@/components/loan-step-message';
import '@/components/scoring-section/scoring-section.scss';

export default function ScoringSection({ applicationId }: ScoringFormProps) {
	const methods = useForm<ScoringForm>({
		mode: 'onBlur',
		defaultValues: {
			gender: 'MALE',
			maritalStatus: 'SINGLE',
			dependentAmount: 0,
			employment: {
				employmentStatus: 'EMPLOYED',
				position: 'WORKER',
			},
			account: '11223344556677890000',
		},
	});

	const genderOptions = [
		{ label: 'Male', value: 'MALE' },
		{ label: 'Female', value: 'FEMALE' },
	];

	const maritalStatusOptions = [
		{ label: 'Single', value: 'SINGLE' },
		{ label: 'Married', value: 'MARRIED' },
		{ label: 'Divorced', value: 'DIVORCED' },
		{ label: 'Widow/Widower', value: 'WIDOW_WIDOWER' },
	];

	const dependentAmountOptions = [
		{ label: '0', value: 0 },
		{ label: '1', value: 1 },
		{ label: '2', value: 2 },
		{ label: '3', value: 3 },
		{ label: '4', value: 4 },
		{ label: '5', value: 5 },
	];

	const employmentStatusOptions = [
		{ label: 'Employed', value: 'EMPLOYED' },
		{ label: 'Unemployed', value: 'UNEMPLOYED' },
		{ label: 'Self emloyed', value: 'SELF_EMPLOYED' },
		{ label: 'Business owner', value: 'BUSINESS_OWNER' },
	];

	const positionOptions = [
		{ label: 'Worker', value: 'WORKER' },
		{ label: 'Middle manager', value: 'MID_MANAGER' },
		{ label: 'Top manager', value: 'TOP_MANAGER' },
		{ label: 'Owner', value: 'OWNER' },
	];

	const [putApplicationRegistration, { isLoading, isSuccess }] =
		usePutApplicationRegistrationMutation();

	const handleSubmit = async (data: ScoringForm) => {
		try {
			await putApplicationRegistration({ id: applicationId, body: data });
		} catch (error) {
			console.error(error);
		}
	};

	if (isLoading) return <Loader />;

	if (isSuccess)
		return (
			<LoanStepMessage
				title="Wait for a decision on the application"
				description="The answer will come to your mail within 10 minutes"
			/>
		);

	return (
		<article className="scoring-section">
			<Form onSubmit={handleSubmit} contextMethods={methods}>
				<div className="scoring-section__title">
					<div className="title__scoring-text">
						<h2>Customize your card</h2>
						<p>Step 2 of 5</p>
					</div>
				</div>

				<div className="scoring-section__person-form">
					<div className="person-form__item">
						<FormElementLabel forId="gender" required>
							What's your gender
						</FormElementLabel>
						<FormElementSelect
							name="gender"
							id="gender"
							values={genderOptions}
							rules={{ ...FormRuler.required }}
						/>
					</div>

					<div className="person-form__item">
						<FormElementLabel forId="maritalStatus" required>
							Your marital status
						</FormElementLabel>
						<FormElementSelect
							name="maritalStatus"
							id="maritalStatus"
							values={maritalStatusOptions}
							rules={{ ...FormRuler.required }}
						/>
					</div>

					<div className="person-form__item">
						<FormElementLabel forId="dependentAmount" required>
							Your number of dependents
						</FormElementLabel>
						<FormElementSelect
							name="dependentAmount"
							id="dependentAmount"
							values={dependentAmountOptions}
							rules={{ ...FormRuler.required }}
						/>
					</div>

					<div className="person-form__item">
						<FormElementLabel forId="passportIssueDate" required>
							Date of issue of the passport
						</FormElementLabel>
						<FormElementInput
							name="passportIssueDate"
							type="date"
							id="passportIssueDate"
							placeholder="Select Date and Time"
							helperText="Incorrect date of passport issue date"
							rules={{ ...FormRuler.required, ...FormRuler.pastDate }}
						/>
					</div>

					<div className="person-form__item">
						<FormElementLabel forId="passportIssueBranch" required>
							Division code
						</FormElementLabel>
						<FormElementInput
							name="passportIssueBranch"
							type="number"
							id="passportIssueBranch"
							placeholder="000000"
							helperText="The series must be 6 digits"
							rules={{ ...FormRuler.required, ...FormRuler.number, minLength: 6, maxLength: 6 }}
						/>
					</div>
				</div>

				<div className="scoring-section__employment">
					<h4 className="employment__title">Employment</h4>

					<div className="employment__employment-form">
						<div className="employment-form__item">
							<FormElementLabel forId="employmentStatus" required>
								Your employment status
							</FormElementLabel>
							<FormElementSelect
								name="employment.employmentStatus"
								id="employmentStatus"
								values={employmentStatusOptions}
								rules={{ ...FormRuler.required }}
							/>
						</div>

						<div className="employment-form__item">
							<FormElementLabel forId="employerINN" required>
								Your employer INN
							</FormElementLabel>
							<FormElementInput
								name="employment.employerINN"
								id="employerINN"
								type="number"
								placeholder="000000000000"
								helperText="Department code must be 12 digits"
								rules={{
									...FormRuler.required,
									...FormRuler.number,
									minLength: 12,
									maxLength: 12,
								}}
							/>
						</div>

						<div className="employment-form__item">
							<FormElementLabel forId="salary" required>
								Your salary
							</FormElementLabel>
							<FormElementInput
								name="employment.salary"
								id="salary"
								type="text"
								placeholder="For example 100 000"
								helperText="Enter your salary"
								rules={{
									...FormRuler.required,
								}}
							/>
						</div>

						<div className="employment-form__item">
							<FormElementLabel forId="position" required>
								Your position
							</FormElementLabel>
							<FormElementSelect
								name="employment.position"
								id="position"
								values={positionOptions}
								rules={{ ...FormRuler.required }}
							/>
						</div>

						<div className="employment-form__item">
							<FormElementLabel forId="workExperienceTotal" required>
								Your work experience total
							</FormElementLabel>
							<FormElementInput
								name="employment.workExperienceTotal"
								id="workExperienceTotal"
								type="text"
								placeholder="For example 10"
								helperText="Enter your work experience total"
								rules={{
									...FormRuler.required,
									maxLength: 2,
								}}
							/>
						</div>

						<div className="employment-form__item">
							<FormElementLabel forId="workExperienceCurrent" required>
								Your work experience current
							</FormElementLabel>
							<FormElementInput
								name="employment.workExperienceCurrent"
								id="workExperienceCurrent"
								type="text"
								placeholder="For example 2"
								helperText="Enter your work experience current"
								rules={{
									...FormRuler.required,
									maxLength: 2,
								}}
							/>
						</div>
					</div>
				</div>
				<div className="scoring-section__button">
					<button type="submit" className="button-primary">
						Continue
					</button>
				</div>
			</Form>
		</article>
	);
}
