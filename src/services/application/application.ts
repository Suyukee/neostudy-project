import axios from 'axios';

const BASE_URL = 'http://localhost:8080/application';

interface PrescoringData {
	amount: number;
	term: number;
	firstName: string;
	lastName: string;
	middleName: string | null;
	email: string;
	birthdate: string | Date;
	passportSeries: string;
	passportNumber: string;
}

export const postApplication = async (body: PrescoringData) => {
	body.amount = +body.amount;
	body.term = +body.term;

	if (body.middleName === '') {
		body.middleName = null;
	}

	const { status } = await axios.post(BASE_URL, body);

	return status;
};
