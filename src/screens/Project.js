import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Project.module.scss';
import SummaryPoint from './Project/SummaryPoint';

function Project({ projectId }) {
	useEffect(() => {
		const body = document.querySelector('#root');
		body.scrollIntoView();
	}, []);

	const project = require(`./../assets/projects/${projectId}`).default;

	let summaries = [];
	for (let i = 0; i < project.summaries.length; i++) {
		let sum = project.summaries[i];
		summaries.push((<SummaryPoint key={i} icon={sum.icon} title={sum.title} content={sum.content} />));
	}

	return (
		<div>
			<Link className={style.backBtn} to="/">
				<FontAwesomeIcon icon={faHome} fixedWidth />
				Back to home
			</Link>
			<h1 className={style.title}>{project.projectName}</h1>
			<div className={style.wrapper}>
				<div className={style.summary}>
					<div className={style.thumbnail} style={{ backgroundImage: `url(${project.thumbnail})` }}></div>
					{summaries}
				</div>
				<div className={style.content}>
					{project.article}
				</div>
			</div>
		</div>
	);
}

export default Project;
