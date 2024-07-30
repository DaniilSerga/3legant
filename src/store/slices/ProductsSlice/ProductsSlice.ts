import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
	createProductRequest,
	deleteProductRequest,
	getProductRequest,
	getProductsInCategoryRequest,
	getProductsRequest,
	updateProductRequest,
} from 'services';
import {IProduct} from 'types/product';

import {IGetProductsProps, InitialState, IUpdateProductProps} from './type';

const createProduct = createAsyncThunk(
	'createProduct',
	async (product: Omit<IProduct, 'id'>) => {
		const response = await createProductRequest(product);
		return response;
	},
);

const getProducts = createAsyncThunk(
	'getProducts',
	async ({limit, sort = 'asc'}: IGetProductsProps) => {
		const products = await getProductsRequest(limit, sort);
		return products;
	},
);

const getProduct = createAsyncThunk('getProduct', async (id: number) => {
	const product = await getProductRequest(id);
	return product;
});

const getProductsInCategory = createAsyncThunk(
	'getProductsInCategory',
	async (category: string) => {
		const products = await getProductsInCategoryRequest(category);
		return products;
	},
);

const updateProduct = createAsyncThunk(
	'updateProduct',
	async ({id, product}: IUpdateProductProps) => {
		const response = await updateProductRequest(id, product);
		return response;
	},
);

const deleteProduct = createAsyncThunk('deleteProduct', async (id: number) => {
	const response = await deleteProductRequest(id);
	return response;
});

const initialState: InitialState = {
	products: [],
	detailedProduct: null,
	totalCount: 0,
};

const productsSlice = createSlice({
	name: 'productsSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.products = [...action.payload];
		});
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.detailedProduct = action.payload;
		});
	},
});

export const ProductsReducer = productsSlice.reducer;
export const ProductsActions = {...productsSlice.actions};
export const ProductsEffects = {
	createProduct,
	getProducts,
	getProduct,
	getProductsInCategory,
	updateProduct,
	deleteProduct,
};
