import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {Props} from './type';

import styles from './KeepLoggedCheckbox.module.scss';

const KeepLoggedCheckbox: FC<Props> = ({value, setKeepUserLogged}) => {
	return (
		<div className={styles.container}>
			<div className={styles.inputContainer}>
				<input
					className={styles.checkbox}
					type="checkbox"
					checked={value}
					onChange={() => setKeepUserLogged(!value)}
				/>
				<p>Remember me</p>
			</div>
			<Link to="/">Forgot password?</Link>
		</div>
	);
};

export default KeepLoggedCheckbox;
