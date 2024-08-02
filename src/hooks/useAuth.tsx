import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';

import {STORAGE_KEYS} from 'constants/storageKeys';
import {useAppDispatch, useAppSelector} from 'store';
import {UserEffects} from 'store/slices/UserSlice';

export const useAuth = () => {
	const dispatch = useAppDispatch();
	const {token} = useAppSelector((state) => state.userReducer);
	const [isUserAuthorized, setAuthorized] = useState(
		!!token || !!localStorage.getItem(STORAGE_KEYS.Token),
	);
	const [isUserKeepLogged, setKeepLogged] = useState(false);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (token) {
			setAuthorized(!!token);

			if (isUserKeepLogged) {
				localStorage.setItem(STORAGE_KEYS.Token, token);
			}
		}
	}, [token]);

	const authorize = async (username: string, password: string) => {
		try {
			setLoading(true);
			await dispatch(UserEffects.auth({username, password}))
				.unwrap()
				.finally(() => setLoading(false));
			return true;
		} catch {
			toast.error('Wrong password or username');
			return false;
		}
	};

	const keepUserLogged = (value: boolean) => {
		setKeepLogged(value);
	};

	return {
		isUserAuthorized,
		authorize,
		keepUserLogged,
		isUserKeepLogged,
		isLoading,
	};
};
