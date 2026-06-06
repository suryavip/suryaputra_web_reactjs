import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../assets/projects';
import style from './Project.module.scss';
import SummaryPoint from './Project/SummaryPoint';

function Project() {
	const { projectId } = useParams();
	const project = projects[projectId];

	useEffect(() => {
		const body = document.querySelector('#root');
		body.scrollIntoView();
	}, []);

	if (!project) {
		return (
			<div>
				<Link className={style.backBtn} to="/">
					<FontAwesomeIcon icon={faHome} fixedWidth />
					Back to home
				</Link>
				<h1 className={style.title}>Project not found</h1>
			</div>
		);
	}

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
