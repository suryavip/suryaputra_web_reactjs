import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';
import firebaseConfig from '../firebaseConfig';

let analyticsPromise;

export function initializeAnalytics() {
	if (!firebaseConfig.measurementId) return undefined;

	if (!analyticsPromise) {
		const app = initializeApp(firebaseConfig);
		analyticsPromise = isSupported().then((supported) => {
			if (!supported) return undefined;

			return getAnalytics(app);
		});
	}

	return analyticsPromise;
}

export async function logAnalyticsEvent(name, params = {}) {
	const analytics = await initializeAnalytics();
	if (analytics) logEvent(analytics, name, params);
}
