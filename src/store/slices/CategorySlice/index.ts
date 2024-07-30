import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getCategoriesRequest} from 'services';

import {InitialState} from './type';

const getCategories = createAsyncThunk('getCategories', async () => {
	const categories = await getCategoriesRequest();
	return categories;
});

const initialState: InitialState = {
	categories: [],
};

const categoriesSlice = createSlice({
	name: 'categoriesSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.categories = [...action.payload];
		});
	},
});

export const CategoriesReducer = categoriesSlice.reducer;
export const CategoriesActions = {...categoriesSlice.actions};
export const CategoriesEffects = {
	getCategories,
};
