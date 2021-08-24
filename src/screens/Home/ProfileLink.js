import { profileLink } from './ProfileLink.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfileLink({ href, className, icon, label }) {
	return (
		<a target="_blank" rel="noreferrer" href={href} className={profileLink} data-variant={className}>
			<i><FontAwesomeIcon icon={icon} /></i>
			{label}
		</a>
	);
}

export default ProfileLink;
