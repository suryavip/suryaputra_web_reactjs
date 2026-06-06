import {works, gallery} from './Works.module.scss';
import ProjectThumb from './ProjectThumb';

function Works() {
	return (
		<div className={works}>
			<h3>Some of my works...</h3>
			<div className={gallery}>
				<ProjectThumb projectId="suryaputra_web" />
				<ProjectThumb projectId="et2020" />
				<ProjectThumb projectId="gk2019" />
			</div>
		</div>
	);
}

export default Works;
