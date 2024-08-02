import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {Footer, Header} from 'components';
import {AuthPage, MainPage} from 'pages';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/auth">
						<Route
							path="sign-in"
							element={<AuthPage isSignIn={true} />}
						/>
						<Route
							path="sign-up"
							element={<AuthPage isSignIn={false} />}
						/>
					</Route>
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;
