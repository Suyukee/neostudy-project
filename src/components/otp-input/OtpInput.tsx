import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import '@/components/otp-input/otp-input.scss';

interface OtpInputProps {
	length?: number;
	onChange: (data: number) => void;
	classes?: string;
}

export default function OtpInput({ length = 4, onChange, classes }: OtpInputProps) {
	const [otp, setOtp] = useState(new Array(length).fill(''));
	const [focusElement, setIsFocusElement] = useState<number | null>(null);

	useEffect(() => {
		if (otp[3] !== '') {
			const code = Number(otp.join(''));
			onChange(code);
		}
	}, [otp]);

	const handleFocus = (index: number) => {
		setIsFocusElement(index);
	};

	const focusToNextInput = (target: HTMLElement) => {
		const nextElementSibling = target.nextElementSibling as HTMLInputElement | null;

		if (nextElementSibling) {
			nextElementSibling.focus();
		}
	};

	const focusToPrevInput = (target: HTMLElement) => {
		const previousElementSibling = target.previousElementSibling as HTMLInputElement | null;

		if (previousElementSibling) {
			previousElementSibling.focus();
		}
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
		const value = e.target.value;

		const isTargetValueDigit = /^\d+$/.test(value);

		if (!isTargetValueDigit && value !== '') return;

		setOtp([...otp.map((data, i) => (i === index ? value : data))]);

		if (index < otp.length - 1 && value) {
			focusToNextInput(e.target);
		}
	};

	const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		const { key } = e;
		const target = e.target as HTMLInputElement;
		const value = target.value;

		if (key === 'ArrowRight' && value !== '') {
			e.preventDefault();
			focusToNextInput(target);
		}

		if (key === 'ArrowLeft') {
			e.preventDefault();
			focusToPrevInput(target);
		}

		if (key === 'Backspace' && value === '') {
			focusToPrevInput(target);
			target.value = '';
		}
	};

	return (
		<div className={`otp-input ${classes}`}>
			{otp.map((item, index) => (
				<input
					className={`otp-input__input ${item === '' && focusElement !== index && 'empty'}`}
					key={index}
					value={item}
					maxLength={1}
					onChange={(e) => handleOnChange(e, index)}
					onKeyDown={(e) => handleOnKeyDown(e)}
					onFocus={() => handleFocus(index)}
				/>
			))}
		</div>
	);
}
