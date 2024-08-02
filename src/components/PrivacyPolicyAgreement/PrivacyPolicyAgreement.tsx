import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {Props} from './type';

import styles from './PrivacyPolicyAgreement.module.scss';

const PrivacyPolicyAgreement: FC<Props> = ({userAgreed, setUserAgreed}) => {
	return (
		<div className={styles.container}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={userAgreed}
				onChange={() => setUserAgreed(!userAgreed)}
			/>
			<p>
				I agree with <Link to="/">Privacy Policy</Link> and{' '}
				<Link to="/">Terms of Use</Link>
			</p>
		</div>
	);
};

export default PrivacyPolicyAgreement;
