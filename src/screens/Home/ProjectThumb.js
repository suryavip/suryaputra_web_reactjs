import style from './ProjectThumb.module.scss';
import { Link } from "react-router-dom";

function ProjectThumb({ projectId }) {
	const project = require(`./../../assets/projects/${projectId}`).default;

	return (
		<Link className={style.project} to={`/project/${projectId}`}>
			<img src={project.thumbnail} alt={project.projectName} />
			<h4>{project.projectName}</h4>
		</Link>
	);
}

export default ProjectThumb;
