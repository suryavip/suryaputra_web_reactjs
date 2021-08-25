import { profileLink } from './ProfileLink.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from "react-router-dom";

function ProfileLink({ href, colorVariant, icon, label, navigation, onClick }) {
	if (navigation) return (
		<Link className={profileLink} to={href} data-variant={colorVariant} onClick={onClick}>
			<i><FontAwesomeIcon icon={icon} /></i>
			{label}
		</Link>
	);

	return (
		<a target="_blank" rel="noreferrer" href={href} className={profileLink} data-variant={colorVariant} onClick={onClick}>
			<i><FontAwesomeIcon icon={icon} /></i>
			{label}
		</a>
	);
}

export default ProfileLink;
