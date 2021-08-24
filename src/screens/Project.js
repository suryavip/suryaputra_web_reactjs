import style from './Project.module.scss';
import SummaryPoint from './Project/SummaryPoint';

function Project({ projectId }) {
	const project = require(`./../assets/projects/${projectId}`).default;

	let summaries = [];
	for (let i = 0; i < project.summaries.length; i++) {
		let sum = project.summaries[i];
		summaries.push((<SummaryPoint key={i} icon={sum.icon} title={sum.title} content={sum.content} />));
	}

	return (
		<div className={style.wrapper}>
			<div className={style.summary}>
				<div className={style.thumbnail} style={{ backgroundImage: `url(${project.thumbnail})` }}></div>
				<div className={style.summaryContent}>
					<h3>Summary</h3>
					{summaries}
				</div>
			</div>
			<div className={style.content}>
				Hello World
			</div>
		</div>
	);
}

export default Project;
