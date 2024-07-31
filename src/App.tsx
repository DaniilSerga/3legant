import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {Footer, Header} from 'components';
import {MainPage} from 'pages';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
