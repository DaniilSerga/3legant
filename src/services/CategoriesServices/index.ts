import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/products/categories`;

export const getCategoriesRequest = async (): Promise<string[]> => {
	const categories = await axios
		.get<string[]>(API_URL)
		.then((resp) => resp.data);

	return categories;
};
