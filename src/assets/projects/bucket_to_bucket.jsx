import {
	faCode,
	faPuzzlePiece,
	faHeartbeat,
	faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import article from './bucket_to_bucket/article';
import thumbnail from './bucket_to_bucket/thumbnail.jpg';

const project = {
	projectName: 'Bucket To Bucket',
	thumbnail,
	summaries: [
		{
			icon: faHeartbeat,
			title: 'Status:',
			content: (<p>Released, since February 2026</p>),
		},
		{
			icon: faCode,
			title: 'Language & framework:',
			content: (<p>Dart &amp; Flutter</p>),
		},
		{
			icon: faWarehouse,
			title: 'Published for:',
			content: (<div>
				<p>Android: <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=suryaputra.bucket_to_bucket">Google Play</a></p>
				<p>iOS and MacOS: <a target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/bucket-to-bucket/id6767092703">Apple App Store</a></p>
				<p>Windows: <a target="_blank" rel="noreferrer" href="https://apps.microsoft.com/detail/9mt7r99j8v2v">Microsoft Store</a></p>
			</div>),
		},
		{
			icon: faPuzzlePiece,
			title: 'Key libraries/plugins:',
			content: (
				<div>
					<p>Core function: <a target="_blank" rel="noreferrer" href="https://pub.dev/packages/minio">minio</a></p>
					<p>Security: <a target="_blank" rel="noreferrer" href="https://pub.dev/packages/encrypt">encrypt</a></p>
					<p>File picker: <a target="_blank" rel="noreferrer" href="https://pub.dev/packages/file_picker">file_picker</a></p>
					<p>Drag &amp; drop: <a target="_blank" rel="noreferrer" href="https://pub.dev/packages/super_drag_and_drop">super_drag_and_drop</a></p>
					<p>Internal code editor: <a target="_blank" rel="noreferrer" href="https://pub.dev/packages/flutter_code_editor">flutter_code_editor</a></p>
				</div>
			),
		},
	],
	article: article,
}
export default project;
