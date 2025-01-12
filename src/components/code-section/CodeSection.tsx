import { CodeSectionProps } from '@/components/code-section/code-section-types';
import { useSendCodeMutation } from '@/services/document/document';
import OtpInput from '@/components/otp-input';
import Loader from '@/components/loader';
import LoanStepMessage from '@/components/loan-step-message';
import '@/components/code-section/code-section.scss';

export default function CodeSection({ applicationId: id }: CodeSectionProps) {
	const [sendCode, { isLoading, isSuccess, isError }] = useSendCodeMutation();

	const handleChange = async (code: number) => {
		await sendCode({ id, code }).catch((error) => console.error(error));
	};

	if (isLoading) return <Loader />;

	if (isSuccess)
		return (
			<LoanStepMessage
				variant="finally"
				title="Congratulations! You have completed your new credit card."
				description="Your credit card will arrive soon. Thank you for choosing us!"
			/>
		);

	return (
		<article className="code-section">
			<h1 className="code-section__title">Please enter confirmation code</h1>

			<div className="code-section__otp-input">
				<OtpInput onChange={handleChange} />

				{isError && <p className="otp-input__error">Invalid confirmation code</p>}
			</div>
		</article>
	);
}
