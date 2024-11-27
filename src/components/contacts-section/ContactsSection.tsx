import { Link } from 'react-router';
import MailIcon from '@/icons/MailIcon';
import MainButtonIcon from '@/icons/MainButtonIcon';
import '@/components/contacts-section/contacts-section.scss';

export default function ContactsSection() {
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

			<form className="form-email">
				<MailIcon />
				<input className="form-email__input" type="email" placeholder="Your email" />
				<button className="form-email__button" type="submit">
					<MainButtonIcon />
					Subscribe
				</button>
			</form>
		</article>
	);
}
