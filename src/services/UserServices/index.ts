import axios from 'axios';
import {IUser} from 'types/user';

const API_URL = `${process.env.REACT_APP_API_URL}/users`;

export const getUsersRequest = async (
	limit?: number,
	sort: 'desc' | 'asc' = 'asc',
): Promise<IUser[]> => {
	const users = await axios
		.get<IUser[]>(API_URL, {params: {limit, sort}})
		.then((resp) => resp.data);
	return users;
};

export const getUserRequest = async (id: number): Promise<IUser> => {
	const user = await axios
		.get<IUser>(`${API_URL}/${id}`)
		.then((resp) => resp.data);
	return user;
};

export const addUserRequest = async (
	user: Omit<IUser, 'id'>,
): Promise<IUser> => {
	const response = await axios
		.post(API_URL, {...user})
		.then((resp) => resp.data);
	return response;
};

export const updateUserRequest = async (
	id: number,
	user: Omit<IUser, 'id'>,
): Promise<IUser> => {
	const response = await axios
		.put(`${API_URL}/${id}`, {...user})
		.then((resp) => resp.data);
	return response;
};

export const deleteUserRequest = async (id: number): Promise<IUser> => {
	const response = await axios
		.delete(`${API_URL}/${id}`)
		.then((resp) => resp.data);
	return response;
};
