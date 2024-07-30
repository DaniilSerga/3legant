import axios from 'axios';
import {IProduct} from 'types/product';

const API_URL = `${process.env.REACT_APP_API_URL}/products`;

export const getProductsRequest = async (
	limit?: number,
	sort: 'desc' | 'asc' = 'asc',
): Promise<IProduct[]> => {
	const products = await axios
		.get<IProduct[]>(API_URL, {params: {limit, sort}})
		.then((resp) => resp.data);
	return products;
};

export const getProductRequest = async (id: number): Promise<IProduct> => {
	const product = await axios
		.get<IProduct>(`${API_URL}/${id}`)
		.then((resp) => resp.data);
	return product;
};

export const getProductsInCategoryRequest = async (
	category: string,
): Promise<IProduct[]> => {
	const products = await axios
		.get<IProduct[]>(`${API_URL}/category/${category}`)
		.then((resp) => resp.data);
	return products;
};

export const createProductRequest = async (
	product: Omit<IProduct, 'id'>,
): Promise<IProduct> => {
	const response = await axios
		.post(API_URL, {...product})
		.then((resp) => resp.data);
	return response;
};

export const updateProductRequest = async (
	id: number,
	product: Omit<IProduct, 'id'>,
): Promise<IProduct> => {
	const reponse = await axios
		.put(`${API_URL}/${id}`, {...product})
		.then((resp) => resp.data);
	return reponse;
};

export const deleteProductRequest = async (id: number): Promise<IProduct> => {
	const response = await axios
		.delete(`${API_URL}/${id}`)
		.then((resp) => resp.data);
	return response;
};
