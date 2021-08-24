import './Home/Home.scss';
import { Link } from "react-router-dom";

import avatar from './../assets/images/avatar.jpg';
import et2020Thumb from './../assets/projects/images/et2020/thumbnail.jpg';
import gk2019Thumb from './../assets/projects/images/gk2019/thumbnail.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function Home() {
	return (
		<div id="home"><div>

			<div id="whoami">
				<div id="profile">
					<img id="avatar" src={avatar} alt="Sudhanta Suryaputra" />
					<div id="name">
						<h1>Sudhanta Suryaputra</h1>
						<h2>Software developer</h2>
					</div>
				</div>
				<div id="links">
					<a target="_blank" rel="noreferrer" href="mailto:sudhanta@suryaputra.web.id" className="email">
						<i><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
						sudhanta@suryaputra.web.id
					</a>
					<a target="_blank" rel="noreferrer" href="https://github.com/suryavip" className="github">
						<i><FontAwesomeIcon icon={faGithub} /></i>
						github.com/suryavip
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sudhanta-suryaputra-3b56441a5/" className="linkedin">
						<i><FontAwesomeIcon icon={faLinkedin} /></i>
						Me on LinkedIn
					</a>
					<a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/dev?id=5437806143182305893"
						className="google-play">
						<i><FontAwesomeIcon icon={faGooglePlay} /></i>
						My apps on Google Play
					</a>
				</div>
			</div>

			<div id="works">
				<h3>Some of my works...</h3>
				<div id="worksGallery">
					<Link className="project" to="/project/et2020">
						<img src={et2020Thumb} alt="Money Admin" />
						<h4>Money Admin</h4>
					</Link>
					<Link className="project" to="/project/gk2019">
						<img src={gk2019Thumb} alt="Grup Kelas" />
						<h4>Grup Kelas</h4>
					</Link>
				</div>
			</div>

		</div></div>
	);
}

export default Home;
