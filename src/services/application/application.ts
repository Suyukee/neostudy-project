import axios from 'axios';
import { PrescoringData } from '@/services/application/application-types';

const BASE_URL = 'http://localhost:8080/application';

export const postApplication = async (body: PrescoringData) => {
	body.amount = +body.amount;
	body.term = +body.term;

	if (body.middleName === '') {
		body.middleName = null;
	}

	const { status } = await axios.post(BASE_URL, body);

	return status;
};
