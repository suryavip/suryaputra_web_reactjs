import style from './SummaryPoint.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SummaryPoint({ icon, title, content }) {
	return (
		<div className={style.summaryPoint}>
			<div className={style.icon}>
				<FontAwesomeIcon icon={icon} />
			</div>
			<div className={style.content}>
				<h4>{title}</h4>
				{content}
			</div>
		</div>
	);
}

export default SummaryPoint;
