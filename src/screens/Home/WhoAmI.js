import styles from './WhoAmI.module.scss';

import ProfileLink from './ProfileLink';

import avatar from './../../assets/images/avatar.jpg';

import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function WhoAmI() {
	return (
		<div className={styles.whoami}>
			<div className={styles.profile}>
				<img className={styles.avatar} src={avatar} alt="Sudhanta Suryaputra" />
				<div className={styles.name}>
					<h1>Sudhanta Suryaputra</h1>
					<h2>Software developer</h2>
				</div>
			</div>
			<div className={styles.links}>

				<ProfileLink href="mailto:sudhanta@suryaputra.web.id" className="email" icon={faEnvelopeOpen} label="sudhanta@suryaputra.web.id" />

				<ProfileLink href="https://github.com/suryavip" className="github" icon={faGithub} label="github.com/suryavip" />

				<ProfileLink href="https://www.linkedin.com/in/sudhanta-suryaputra-3b56441a5/" className="linkedin" icon={faLinkedin} label="Me on LinkedIn" />

				<ProfileLink href="https://play.google.com/store/apps/dev?id=5437806143182305893" className="google-play" icon={faGooglePlay} label="My apps on Google Play" />

			</div>
		</div>
	);
}

export default WhoAmI;
