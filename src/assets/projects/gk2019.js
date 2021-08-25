import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faCode,
	faHeartbeat,
	faCloud,
} from '@fortawesome/free-solid-svg-icons';
import article from './gk2019/article';

const project = {
	projectName: 'Grup Kelas',
	thumbnail: require('./gk2019/thumbnail.jpg').default,
	summaries: [
		{
			icon: faHeartbeat,
			title: 'Status:',
			content: (
				<div>
					<p>Taken down from production</p>
					<p>Sep 2019 - Nov 2020</p>
				</div>
			),
		},
		{
			icon: faCode,
			title: 'Front-end tech stack:',
			content: (
				<div>
					<p>HTML, CSS, JavaScript</p>
					<p>Apache Cordova</p>
				</div>
			),
		},
		{
			icon: faCloud,
			title: 'Back-end tech stack:',
			content: (
				<div>
					<p>Python &amp; flask-RESTful</p>
					<p>MySQL</p>
					<p>Firebase</p>
				</div>
			),
		},
		{
			icon: faGithub,
			title: 'Repository:',
			content: (
				<div>
					<p><a target="_blank" rel="noreferrer" href="https://github.com/suryavip/gk2019">Front-end base</a></p>
					<p><a target="_blank" rel="noreferrer" href="https://github.com/suryavip/gk2019-cordova">Apache Cordova wrapper</a></p>
					<p><a target="_blank" rel="noreferrer" href="https://github.com/suryavip/gk2019-api">Back-end</a></p>
				</div>
			),
		},
	],
	article: article,
}
export default project;