import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import store from 'store';

import App from './App';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename="/">
				<ToastContainer position="bottom-right" />
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
