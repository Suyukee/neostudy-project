import axios from 'axios';

const BASE_URL = 'http://localhost:8080/email';

export const postEmail = async (email: string) => {
	const { status } = await axios.post(BASE_URL, { email });

	return status;
};
