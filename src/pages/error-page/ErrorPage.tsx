import { useNavigate } from 'react-router';
import '@/pages/error-page/error-page.scss';

export default function ErrorPage() {
	const navigate = useNavigate();
	return (
		<main className="error-page">
			<article className="error-page__error-section">
				<section className="error">
					<h1 className="error-section__title">Oops....</h1>
					<h2 className="error-section__subtitle">Page not found</h2>
					<p className="error-section__description">
						This Page doesn`t exist or was removed! We suggest you go back.
					</p>
					<div className="error-section__button-back">
						<button className="button-back__button button-primary" onClick={() => navigate(-1)}>
							Go back
						</button>
					</div>
				</section>

				<img className="error-page__image" src="/images/404.png" alt="Error 404" />
			</article>
		</main>
	);
}
