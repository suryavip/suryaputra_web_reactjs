import { faCode, faTasks, faPuzzlePiece, faFolderPlus, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';

const project = {
	projectName: 'Money Admin',
	thumbnail: require('./et2020/thumbnail.jpg').default,
	summaries: [
		{
			icon: faCode,
			title: 'Language & framework:',
			content: (<p>Dart &amp; Flutter</p>),
		},
		{
			icon: faTasks,
			title: 'Project management:',
			content: (<p>Github</p>),
		},
		{
			icon: faPuzzlePiece,
			title: 'Key libraries/plugins:',
			content: (
				<div>
					<p>Database: <a target="_blank" rel="noreferrer" href="https://pub.dev/packages/sqflite">sqflite</a></p>
					<p>User auth: <a target="_blank" rel="noreferrer" href="https://pub.dev/packages/google_sign_in">google_sign_in</a></p>
					<p>Data backup: <a target="_blank" rel="noreferrer" href="https://pub.dev/packages/googleapis">googleapis</a></p>
				</div>
			),
		},
		{
			icon: faFolderPlus,
			title: 'Libraries created during this project:',
			content: (
				<p><a target="_blank" rel="noreferrer" href="https://pub.dev/packages/selection_controller">selection_controller</a></p>
			),
		},
		{
			icon: faHeadphonesAlt,
			title: 'Additional feature support:',
			content: (
				<p>PHP and cron job to cache and provide currency conversion rate for the app.</p>
			),
		},
	],
}
export default project;