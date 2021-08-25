import compiled from './compiled.png';
import stats from './statistics.png';

const article = (
	<article>
		<p>Cross-platform app created with Cordova framework to help students manage their schedule, homework, and exam, collaboratively with their classmates.</p>
		<img src={compiled} alt="Screenshots" />
		<p>
			Key Features:
		</p>
		<ul>
			<li>Collaboratively manage schedule, homework, and exam.</li>
			<li>Images and file sharing.</li>
			<li>Track which homework has been done and which exam has been prepared.</li>
			<li>Accessible from web browsers (https://grupkelas.boostedcode.com) (no longer active).</li>
		</ul>
		<br/>
		<h2>Discontinued</h2>
		<p>Unfortunately, I decided to abandon this project when I get my first employment as a front-end web developer. At the end of its life, this app started to pick up user acquisitions on Google Play due to the Covid-19 pandemic causing school from home and the start of the academic season in Indonesia. But since there are still some latent problems with the app and the back-end code, and I won't have time to maintain it, it's better to terminate and unpublish the project before it has too many users depends on it.</p>
		<img src={stats} alt="Statistics of Installed Audience on Google Play Console" />
	</article>
);

export default article;