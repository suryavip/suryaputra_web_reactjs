import compiled from './compiled.png';

const article = (
	<article>
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
	</article>
);

export default article;