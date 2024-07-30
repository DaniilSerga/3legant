import axios from 'axios';
import {ICart} from 'types/cart';

const API_URL = `${process.env.REACT_APP_API_URL}/carts`;

export const getCartsRequest = async (
	limit?: number,
	sort: 'desc' | 'asc' = 'asc',
	startDate?: string,
	endDate?: string,
	userId?: number,
): Promise<ICart[]> => {
	const carts = await axios
		.get<
			ICart[]
		>(API_URL, {params: {limit, sort, startDate, endDate, userId}})
		.then((resp) => resp.data);
	return carts;
};

export const getCartRequest = async (id: number): Promise<ICart> => {
	const cart = await axios
		.get<ICart>(`${API_URL}/${id}`)
		.then((resp) => resp.data);
	return cart;
};

export const addProductRequest = async (
	cart: Omit<ICart, 'id'>,
): Promise<ICart> => {
	const response = await axios
		.post<ICart>(API_URL, {...cart})
		.then((resp) => resp.data);
	return response;
};

export const updateCartProductRequest = async (
	id: number,
	cart: Omit<ICart, 'id'>,
): Promise<ICart> => {
	const response = await axios
		.patch(`${API_URL}/${id}`, {...cart})
		.then((resp) => resp.data);
	return response;
};

export const deleteCartRequest = async (id: number): Promise<ICart> => {
	const response = await axios
		.delete(`${API_URL}/${id}`)
		.then((resp) => resp.data);
	return response;
};
