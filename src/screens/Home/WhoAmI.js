import styles from './WhoAmI.module.scss';

import ProfileLink from './ProfileLink';

import avatar from './../../assets/images/avatar.jpg';

import { faEnvelopeOpen, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function WhoAmI() {
	return (
		<div className={styles.whoami}>
			<div className={styles.profile}>
				<img src={avatar} alt="Sudhanta Suryaputra" />
				<div>
					<h1>Sudhanta Suryaputra</h1>
					<h2>Software developer</h2>
				</div>
			</div>
			<div className={styles.links}>

				<ProfileLink href="mailto:sudhanta@suryaputra.web.id" icon={faEnvelopeOpen} label="sudhanta@suryaputra.web.id" />

				<ProfileLink href="https://github.com/suryavip" colorVariant="github" icon={faGithub} label="github.com/suryavip" />

				<ProfileLink href="https://www.linkedin.com/in/sudhanta-suryaputra-3b56441a5/" colorVariant="linkedin" icon={faLinkedin} label="Me on LinkedIn" />

				<ProfileLink href="https://play.google.com/store/apps/dev?id=5437806143182305893" colorVariant="google-play" icon={faGooglePlay} label="My apps on Google Play" />

				<ProfileLink href="/request-resume" icon={faFileAlt} label="Request CV/Resume" navigation />

			</div>
		</div>
	);
}

export default WhoAmI;
