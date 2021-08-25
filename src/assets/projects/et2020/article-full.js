import compiled from './compiled.png';

const article = (
	<article>
		<h1>Money Admin</h1>
		<p>Simple and secure multi-platform-ready app created with Flutter to help users track where their money goes. Currently available for Android platform through Google Play Store, and soon will be available on iOS App Store.</p>
		<img src={compiled} alt="Screenshots" />
		<p>
			Key Features:
		</p>
			<ul>

				<li>Multiple wallet/account.</li>
				<li>Record income, expense, transfer and adjustment.</li>
				<li>Support multiple currencies and conversions.</li>
				<li>User's privacy (data stays only within user's device and user's cloud provider of choice).</li>
				<li>Sync and backup data via Google Drive.</li>
			</ul>
		<br />
		<h2>Background</h2>
		<p>This project started in early 2020 when I decided to have enough with the Cordova framework and move on to Flutter. This project is a way for me to learn the Flutter framework. I know that the best way (at least for me) to learn a new framework, especially a huge scale framework like Flutter, is to create an actual product, from design to publishing state.
		</p>
		<br />
		<h2>Technical</h2>
		<p>The very common question I get asked by other Flutter developers are: "What architecture pattern is being used?", "What state management do you use?".</p>

		<p>For the architecture pattern itself, I use a custom approach. As this is my first Flutter app, the development starts from very basic implementation then is upgraded step-by-step to a level where it can fulfill the requirement. It's very time-consuming, but it gave me a really good understanding of why certain patterns are designed the way they are.</p>

		<p>As for state management: similar to the architecture pattern, I use the very basic state management on Flutter (StatefulWidget with setState method) and enhance it as necessary (like using a Stream). And like the architecture pattern, it's very time-consuming, but it gave me a really good understanding.</p>
		<br />
		<h2>Challenges</h2>
		<p>One of the biggest challenges in developing this app is deciding how to store the user's data. At first, I decided to use my own back-end to store all the user's data and provide API for data synchronization. But later I realized that is not the best option. Users will be required to create an account, their privacy can be compromised, and I must pay for storage and maintain the database and API. Since there will be no interaction between users, centralized data storage like this won't be needed.</p>

		<p>Inspired by Whatsapp, I decided to use the same storage strategy: local storage with an additional option to backup to the user's cloud storage (in this case: Google Drive). But unlike Whatsapp, my app should be accessible by a user within his/her multiple devices. Therefore data synchronization is needed, and it needs to be done on the user's devices (client/front-end side) since there is no server to do it. With an additional table on the database to record changes and a custom algorithm to sync two SQL databases, I've managed to fulfill this requirement.</p>

		<p>Development on this app has been through many changes on Flutter and Dart itself. The most notable change is the new null-safety feature on Dart. It requires me to refactor a lot of codes to utilize the null-safety feature properly. But I'm happy with that experience as a part of learning.</p>
		<br />
		<h2>Future</h2>
		<p>This project is still active as this is my learning media for Flutter. I have a few plans for monetization and new features to be added. This project is private, but you can ask me to show the codes.</p>
	</article>
);

export default article;