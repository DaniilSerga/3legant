import React, {FC, useCallback, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from 'store';
import {ProductsEffects} from 'store/slices/ProductsSlice/ProductsSlice';

import styles from './MainPage.module.scss';

const MainPage: FC = () => {
	const dispatch = useAppDispatch();
	const {products} = useAppSelector((state) => state.productsReducer);

	const getProducts = useCallback(async () => {
		dispatch(ProductsEffects.getProducts({}));
	}, []);

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className={styles.container}>
			{products.map((product) => (
				<div key={product.id}>
					<img src={product.image} />
					<b>TITLE</b>
					<p>{product.title}</p>
					<b>PRICE</b>
					<p>${product.price}</p>
					<b>CATEGORY</b>
					<p>{product.category}</p>
					<b>DESCRIPTION</b>
					<p>{product.description}</p>
				</div>
			))}
		</div>
	);
};

export default MainPage;
