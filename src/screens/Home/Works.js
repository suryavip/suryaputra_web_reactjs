import {works, gallery, project} from './Works.module.scss';
import { Link } from "react-router-dom";

import et2020Thumb from './../../assets/projects/images/et2020/thumbnail.jpg';
import gk2019Thumb from './../../assets/projects/images/gk2019/thumbnail.jpg';

function Works() {
	return (
		<div className={works}>
			<h3>Some of my works...</h3>
			<div className={gallery}>
				<Link className={project} to="/project/et2020">
					<img src={et2020Thumb} alt="Money Admin" />
					<h4>Money Admin</h4>
				</Link>
				<Link className={project} to="/project/gk2019">
					<img src={gk2019Thumb} alt="Grup Kelas" />
					<h4>Grup Kelas</h4>
				</Link>
			</div>
		</div>
	);
}

export default Works;
