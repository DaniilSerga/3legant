import {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from 'store';
import {UserEffects} from 'store/slices/UserSlice';

export const useAuth = () => {
	const dispatch = useAppDispatch();
	const {currentUser, token} = useAppSelector((state) => state.userReducer);
	const [isUserAuthorized, setAuthorized] = useState(false);

	useEffect(() => {
		setAuthorized(!!currentUser && !!token);
	}, [token, currentUser]);

	const authorize = async (username: string, password: string) => {
		await dispatch(UserEffects.auth({username, password}));
	};

	return {isUserAuthorized, authorize};
};
