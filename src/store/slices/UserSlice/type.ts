import {IUser} from 'types/user';

export interface InitialState {
	users: IUser[];
	currentUser: IUser | null;
	token: string;
}

export interface IAuthParams {
	username: string;
	password: string;
}

export interface IGetUsersParams {
	limit?: number;
	sort: 'desc' | 'asc';
}

export interface IUpdateUserParams {
	id: number;
	user: Omit<IUser, 'id'>;
}
