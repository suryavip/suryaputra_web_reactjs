import { profileLink } from './ProfileLink.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfileLink({ href, colorVariant, icon, label }) {
	return (
		<a target="_blank" rel="noreferrer" href={href} className={profileLink} data-variant={colorVariant}>
			<i><FontAwesomeIcon icon={icon} /></i>
			{label}
		</a>
	);
}

export default ProfileLink;
