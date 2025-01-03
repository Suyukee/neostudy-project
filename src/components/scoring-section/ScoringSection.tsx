import { useForm } from 'react-hook-form';
import Form from '@/components/form';
import FormElementLabel from '@/components/form-element-label';
import FormElementSelect from '@/components/form-element-select';
import FormElementInput from '@/components/form-element-input';
import { FormRuler } from '@/utils/FormRuler';
import '@/components/scoring-section/scoring-section.scss';

interface ScoringSection {
	gender: 'MALE' | 'FAMALE';
	maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER';
	dependentAmount: 'number';
	passportIssueDate: 'string';
	passportIssueBranch: 'string';
	employmentStatus: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER';
	employerINN: 'number';
	salary: 'number';
	position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER';
	workExperienceTotal: 'number';
	workExperienceCurrent: 'number';
}

export default function ScoringSection() {
	const methods = useForm<ScoringSection>({
		mode: 'onBlur',
	});

	const genderOptions = [
		{ label: 'Male', value: 'MALE' },
		{ label: 'Female', value: 'FEMALE' },
	];

	const maritalStatusOptions = [
		{ label: 'Married', value: 'MARRIED' },
		{ label: 'Divorced', value: 'DIVORCED' },
		{ label: 'Single', value: 'SINGLE' },
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
		{ label: 'Unemployed', value: 'UNEMPLOYED' },
		{ label: 'Self emloyed', value: 'SELF_EMPLOYED' },
		{ label: 'Employed', value: 'EMPLOYED' },
		{ label: 'Business owner', value: 'BUSINESS_OWNER' },
	];

	const positionOptions = [
		{ label: 'Worker', value: 'WORKER' },
		{ label: 'Middle manager', value: 'MID_MANAGER' },
		{ label: 'Top manager', value: 'TOP_MANAGER' },
		{ label: 'Owner', value: 'OWNER' },
	];

	const handleSubmit = (data: ScoringSection) => {
		console.log(data);
	};

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
								name="employmentStatus"
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
								name="employerINN"
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
								name="salary"
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
								name="position"
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
								name="workExperienceTotal"
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
								name="workExperienceCurrent"
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
