import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
	addProductRequest,
	deleteCartRequest,
	getCartRequest,
	getCartsRequest,
	updateCartProductRequest,
} from 'services/CartServices';
import {ICart} from 'types/cart';

import {IGetCartsParams, InitialState, IUpdateCartProductParams} from './type';

const getCarts = createAsyncThunk(
	'getCarts',
	async ({
		sort = 'asc',
		endDate,
		limit,
		startDate,
		userId,
	}: IGetCartsParams) => {
		const response = await getCartsRequest(
			limit,
			sort,
			startDate,
			endDate,
			userId,
		);
		return response;
	},
);

const getCart = createAsyncThunk('getCard', async (id: number) => {
	const response = await getCartRequest(id);
	return response;
});

const addProduct = createAsyncThunk(
	'addProduct',
	async (cart: Omit<ICart, 'id'>) => {
		const response = await addProductRequest(cart);
		return response;
	},
);

const updateCartProduct = createAsyncThunk(
	'updateCartProduct',
	async ({id, cart}: IUpdateCartProductParams) => {
		const response = await updateCartProductRequest(id, cart);
		return response;
	},
);

const deleteCart = createAsyncThunk('deleteCart', async (id: number) => {
	const response = await deleteCartRequest(id);
	return response;
});

const initialState: InitialState = {
	carts: [],
	currentCart: null,
};

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCarts.fulfilled, (state, action) => {
			state.carts = [...action.payload];
		});
		builder.addCase(getCart.fulfilled, (state, action) => {
			state.currentCart = action.payload;
		});
	},
});

export const CartReducer = cartSlice.reducer;
export const CartActions = {...cartSlice.actions};
export const CartEffects = {
	getCarts,
	getCart,
	addProduct,
	updateCartProduct,
	deleteCart,
};
