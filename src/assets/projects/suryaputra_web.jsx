import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faCode,
	faHeartbeat,
} from '@fortawesome/free-solid-svg-icons';
import article from './suryaputra_web/article';
import thumbnail from './suryaputra_web/thumbnail.jpg';

const project = {
	projectName: 'This Website',
	thumbnail,
	summaries: [
		{
			icon: faHeartbeat,
			title: 'Status:',
			content: (<p>Published, since August 2021</p>),
		},
		{
			icon: faCode,
			title: 'Language & framework:',
			content: (<div>
				<p>HTML, CSS, JavaScript</p>
				<p>React.js</p>
			</div>),
		},
		{
			icon: faGithub,
			title: 'Repository:',
			content: (<p><a target="_blank" rel="noreferrer" href="https://github.com/suryavip/suryaputra_web_reactjs">on Github</a></p>),
		},
	],
	article: article,
}
export default project;
