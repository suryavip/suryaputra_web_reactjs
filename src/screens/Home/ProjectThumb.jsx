import style from './ProjectThumb.module.scss';
import { Link } from "react-router-dom";
import projects from '../../assets/projects';

function ProjectThumb({ projectId }) {
	const project = projects[projectId];

	return (
		<Link className={style.project} to={`/project/${projectId}`}>
			<img src={project.thumbnail} alt={project.projectName} />
			<h4>{project.projectName}</h4>
		</Link>
	);
}

export default ProjectThumb;
