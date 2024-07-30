import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authRequest} from 'services';
import {
	addUserRequest,
	deleteUserRequest,
	getUserRequest,
	getUsersRequest,
	updateUserRequest,
} from 'services/UserServices';
import {IUser} from 'types/user';

import {
	IAuthParams,
	IGetUsersParams,
	InitialState,
	IUpdateUserParams,
} from './type';

const auth = createAsyncThunk(
	'auth',
	async ({username, password}: IAuthParams) => {
		const token = await authRequest(username, password);
		return token;
	},
);

const getUsers = createAsyncThunk(
	'getUsers',
	async ({limit, sort = 'asc'}: IGetUsersParams) => {
		const users = await getUsersRequest(limit, sort);
		return users;
	},
);

const getUser = createAsyncThunk('getUser', async (id: number) => {
	const user = await getUserRequest(id);
	return user;
});

const addUser = createAsyncThunk('addUser', async (user: Omit<IUser, 'id'>) => {
	const response = await addUserRequest(user);
	return response;
});

const updateUser = createAsyncThunk(
	'updateUser',
	async ({id, user}: IUpdateUserParams) => {
		const response = await updateUserRequest(id, user);
		return response;
	},
);

const deleteUser = createAsyncThunk('deleteUser', async (id: number) => {
	const user = await deleteUserRequest(id);
	return user;
});

const initialState: InitialState = {
	users: [],
	currentUser: null,
	token: '',
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(auth.fulfilled, (state, action) => {
			state.token = action.payload.token;
		});
		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.users = [...action.payload];
		});
		builder.addCase(getUser.fulfilled, (state, action) => {
			state.currentUser = action.payload;
		});
	},
});

export const UserReducer = userSlice.reducer;
export const UserActions = {...userSlice.actions};
export const UserEffects = {
	auth,
	getUsers,
	getUser,
	addUser,
	updateUser,
	deleteUser,
};
