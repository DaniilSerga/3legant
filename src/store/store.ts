import {configureStore} from '@reduxjs/toolkit';

import {
	CartReducer as cartReducer,
	CategoriesReducer as categoriesReducer,
	ProductsReducer as productsReducer,
	UserReducer as userReducer,
} from './slices';

const store = configureStore({
	reducer: {
		productsReducer,
		cartReducer,
		userReducer,
		categoriesReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
