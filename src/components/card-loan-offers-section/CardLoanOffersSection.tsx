import { useAppDispatch } from '@/redux/hooks';
import { setChossedOfferIdAction } from '@/redux/offers/offersActions';
import { usePostAplicationApplyMutation } from '@/services/application/application';
import { CardLoanOfferProps } from '@/components/card-loan-offers-section/card-loan-offers-section-types';
import CorrectlyIcon from '@/icons/CorrectlyIcon';
import ErrorCrossIcon from '@/icons/ErrorCrossIcon';
import Loader from '@/components/loader';
import '@/components/card-loan-offers-section/card-loan-offers-section.scss';

export default function CardLoanOffers({ offers }: CardLoanOfferProps) {
	const dispatch = useAppDispatch();

	const [postApplicationApply, { isLoading }] = usePostAplicationApplyMutation();

	const handleSelectOffer = async (id: number) => {
		try {
			await postApplicationApply(offers[id]);

			dispatch(setChossedOfferIdAction(id));
		} catch (error) {
			console.error(error);
		}
	};

	if (isLoading) return <Loader />;

	return (
		<section className="prescoring-offers">
			{offers.map((offer, index) => (
				<div className="prescoring-offers__offer" key={index}>
					<img src="/images/surprise.png" alt="Surprise 🎉" />

					<div className="offer__description">
						<p>Requested amount: {offer.requestedAmount.toLocaleString()} ₽</p>
						<p>Total amount: {offer.totalAmount.toLocaleString()} ₽</p>
						<p>For {offer.term} month</p>
						<p>Monthly payment: {Math.round(offer.monthlyPayment).toLocaleString()} ₽</p>
						<p>Your rate: {offer.rate}%</p>
						<p>
							Insurance included {offer.isInsuranceEnabled ? <CorrectlyIcon /> : <ErrorCrossIcon />}
						</p>
						<p>Salary client {offer.isSalaryClient ? <CorrectlyIcon /> : <ErrorCrossIcon />}</p>
					</div>

					<div className="offer__button">
						<button className="button-primary" onClick={() => handleSelectOffer(index)}>
							Select
						</button>
					</div>
				</div>
			))}
		</section>
	);
}
