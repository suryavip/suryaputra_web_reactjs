import { useEffect } from 'react';
import style from './RequestResume.module.scss';
import ProfileLink from './Home/ProfileLink';

import { faCopy, faEnvelopeOpen, faHome } from '@fortawesome/free-solid-svg-icons';

import firebase from "firebase/app";
import "firebase/analytics";

function RequestResume() {
	useEffect(() => {
		const body = document.querySelector('#root');
		body.scrollIntoView();
	}, []);

	const copyToClipboard = async function() {
		const textarea = document.createElement('textarea');
      	textarea.innerText = 'sudhanta@suryaputra.web.id';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);
		alert('Email address copied!');
	}

	const analytics = firebase.analytics();
	analytics.logEvent('request_resume_visit', {});

	return (
		<div className={style.wrap}><div>
			<h4>🙏 Thank you for your interest on my CV/Resume.</h4>
			<p>Please send me an email sent from your company's email address and explain who you are. My resume may contains private informations that I don't like to be publicly available.</p>
			<blockquote>
				My email address: <br/>
				<strong>sudhanta@suryaputra.web.id</strong>
			</blockquote>
			<div className={style.buttons}>
				<ProfileLink href="mailto:sudhanta@suryaputra.web.id" icon={faEnvelopeOpen} label="Open email app" />
				<ProfileLink href="#" navigation icon={faCopy} label="Copy my email address" onClick={copyToClipboard} />
				<ProfileLink href="/" navigation icon={faHome} colorVariant="muted" label="Back to home" />
			</div>
		</div></div>
	);
}

export default RequestResume;
