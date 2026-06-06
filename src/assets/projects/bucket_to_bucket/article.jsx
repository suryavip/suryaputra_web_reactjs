import compiled from './compiled.png';

const article = (
	<article>
		<p>Simple cross-platform object storage browser GUI created with Flutter. Can connect to object storage servers like MinIO, AWS S3, Cloudflare R2, etc.</p>
		<img src={compiled} alt="Screenshots" />
		<p>
			Key Features:
		</p>
		<ul>
			<li>Encrypted and locally stored connection profiles.</li>
			<li>Minimal permission approach.</li>
			<li>Custom URL pattern replacer.</li>
			<li>In app image viewer</li>
			<li>In app upload and download manager.</li>
			<li>Sort by name or modified time.</li>
			<li>Create and remove buckets.</li>
			<li>Bucket policy editor.</li>
			<li>Create and remove folders.</li>
			<li>Upload and remove files.</li>
		</ul>
	</article>
);

export default article;