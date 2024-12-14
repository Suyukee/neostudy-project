import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { postEmail } from '@/services/email/email';
import { EmailFormEvent } from '@/components/contacts-section/contacts-section-types';
import { EMAIL_SUBSCRIBED_IS_SEND } from '@/resources/constants';
import MailIcon from '@/icons/MailIcon';
import MainButtonIcon from '@/icons/MainButtonIcon';
import '@/components/contacts-section/contacts-section.scss';

export default function ContactsSection() {
	const [emailIsSend, setEmailIsSend] = useState(false);

	useEffect(() => {
		if (window.localStorage.getItem(EMAIL_SUBSCRIBED_IS_SEND)) {
			setEmailIsSend(true);
		}
	}, []);

	const handleSubmit = async (e: EmailFormEvent) => {
		e.preventDefault();

		const email = e.currentTarget.elements.email.value;
		const status = await postEmail(email);

		if (status === 200) {
			setEmailIsSend(true);
			window.localStorage.setItem(EMAIL_SUBSCRIBED_IS_SEND, JSON.stringify(true));
		}
	};

	return (
		<article className="contacts-section">
			<section className="contacts">
				<Link to="/" className="contacts__support">
					Support
				</Link>
				<Link to="/" className="contacts__subscribe">
					Subscribe Newsletter & get
				</Link>
				<Link to="/" className="contacts__news">
					Bank News
				</Link>
			</section>

			{emailIsSend ? (
				<p className="email-is-send">"You are already subscribed to the bank's newsletter"</p>
			) : (
				<form className="form-email" onSubmit={handleSubmit}>
					<MailIcon />
					<input
						className="form-email__input"
						type="email"
						name="email"
						placeholder="Your email"
						required
					/>
					<button className="form-email__button" type="submit">
						<MainButtonIcon />
						Subscribe
					</button>
				</form>
			)}
		</article>
	);
}
