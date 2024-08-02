import React, {FC, useCallback, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Bag} from 'assets/icons/bag.svg';
import {ReactComponent as Logo} from 'assets/icons/logo.svg';
import {ReactComponent as Loupe} from 'assets/icons/loupe.svg';
import {ReactComponent as User} from 'assets/icons/user.svg';
import {useAuth} from 'hooks';
import {useAppDispatch, useAppSelector} from 'store';
import {CartEffects} from 'store/slices/CartSlice';
import {CategoriesEffects} from 'store/slices/CategorySlice';

import styles from './Header.module.scss';

const Header: FC = () => {
	const dispatch = useAppDispatch();
	const {categories} = useAppSelector((state) => state.categoriesReducer);
	const {currentCart} = useAppSelector((state) => state.cartReducer);
	const {isUserAuthorized} = useAuth();

	const getCategories = useCallback(async () => {
		dispatch(CategoriesEffects.getCategories());
	}, []);

	const getCart = useCallback(async (userId: number) => {
		dispatch(CartEffects.getCart(userId));
	}, []);

	useEffect(() => {
		getCategories();
		getCart(1);
	}, []);

	return (
		<header className={styles.headerWrapper}>
			<div className={styles.headerContainer}>
				<div className={styles.logoContainer}>
					<Logo />
				</div>
				<nav className={styles.navContainer}>
					<ul className={styles.navList}>
						<li>
							<Link to="/">home</Link>
						</li>
						<li className={styles.categoriesListContainer}>
							<Link to="/">categories</Link>
							<div className={styles.categoriesDropdown}>
								{categories.map((category, index) => (
									<div key={index}>
										<Link to="/">{category}</Link>
									</div>
								))}
							</div>
						</li>
						<li>
							<Link to="/">contact us</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.accountContainer}>
					<Link to="/">
						<Loupe />
					</Link>
					{isUserAuthorized && currentCart ? (
						<>
							<Link to="/">
								<User />
							</Link>
							<div className={styles.cartContainer}>
								<Link to="/">
									<Bag />
								</Link>
								<div className={styles.cartAmount}>
									<p>{currentCart.products.length}</p>
								</div>
							</div>
						</>
					) : (
						<div className={styles.signInContainer}>
							<Link to="/auth/sign-in">Sign in</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
