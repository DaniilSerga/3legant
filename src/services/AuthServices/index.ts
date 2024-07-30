import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/auth/login`;

export const authRequest = async (
	username: string,
	password: string,
): Promise<{token: string}> => {
	const token = await axios
		.post<{token: string}>(API_URL, {username, password})
		.then((resp) => resp.data);
	return token;
};
