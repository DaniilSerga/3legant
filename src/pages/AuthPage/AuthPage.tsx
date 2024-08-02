import React, {FC, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import background from 'assets/images/authBackground.webp';
import {
	ButtonLoader,
	KeepLoggedCheckbox,
	PrivacyPolicyAgreement,
} from 'components';
import {useAuth} from 'hooks';

import {Props} from './type';

import styles from './AuthPage.module.scss';

const AuthPage: FC<Props> = ({isSignIn}) => {
	const {
		authorize,
		isUserKeepLogged,
		keepUserLogged,
		isUserAuthorized,
		isLoading,
	} = useAuth();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [userAgreed, setUserAgreed] = useState(false);
	const navigate = useNavigate();

	const handleUserAgreement = (isUserAgreed: boolean) => {
		setUserAgreed(isUserAgreed);
	};

	const handleSubmit = async (username: string, password: string) => {
		await authorize(username, password);
	};

	useEffect(() => {
		if (isUserAuthorized) {
			navigate('/');
		}
	}, [isUserAuthorized]);

	return (
		<div className={styles.authContainer}>
			<div className={styles.coverContainer}>
				<img src={background} alt="" />
			</div>
			{isSignIn ? (
				<div className={styles.formWrapper}>
					<h2>Sign in</h2>
					<p>
						Don’t have an accout yet?&nbsp;
						<Link to="../sign-up">Sign up</Link>
					</p>
					<div className={styles.formContainer}>
						<input
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							type="text"
						/>
						<input
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
						/>
					</div>
					<KeepLoggedCheckbox
						value={isUserKeepLogged}
						setKeepUserLogged={keepUserLogged}
					/>
					<button
						disabled={isLoading}
						onClick={() => handleSubmit(username, password)}
					>
						{isLoading ? <ButtonLoader /> : 'Sign in'}
					</button>
				</div>
			) : (
				<div className={styles.formWrapper}>
					<h2>Sign up</h2>
					<p>
						Already have an account?&nbsp;
						<Link to="../sign-in">Sign in</Link>
					</p>
					<div className={styles.formContainer}>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Your name"
							type="text"
						/>
						<input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
							type="text"
						/>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email address"
							type="email"
						/>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							type="password"
						/>
					</div>
					<PrivacyPolicyAgreement
						userAgreed={userAgreed}
						setUserAgreed={handleUserAgreement}
					/>
					<button onClick={() => handleSubmit(username, password)}>
						Sign up
					</button>
				</div>
			)}
		</div>
	);
};

export default AuthPage;
