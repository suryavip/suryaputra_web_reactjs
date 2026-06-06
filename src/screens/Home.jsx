import { home } from './Home.module.scss';

import WhoAmI from './Home/WhoAmI';
import Works from './Home/Works';

function Home() {
	return (
		<div className={home}><div>
			<WhoAmI />
			<Works />
		</div></div>
	);
}

export default Home;
