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
		<p style={{ lineHeight: 1, }}>
			<a target="_blank" rel="noreferrer" href='https://play.google.com/store/apps/details?id=suryaputra.moneyadmin&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' style={{ textDecoration: 'none', color: 'inherit', }}>
				<img style={{ width: '220px', margin: 0, }} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
			</a>
			<span style={{ opacity: .7, fontSize: '10px', display: 'block', }}>Google Play and the Google Play logo are trademarks of Google LLC.</span>
		</p>
	</article>
);

export default article;