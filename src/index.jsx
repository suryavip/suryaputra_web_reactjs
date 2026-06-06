import React from 'react';
import { createRoot } from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

import './index.scss';
import { initializeAnalytics } from './lib/firebase';

import Home from './screens/Home';
import Project from './screens/Project';
import RequestResume from './screens/RequestResume';

initializeAnalytics();

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/request-resume" element={<RequestResume />} />
				<Route path="/project/:projectId" element={<Project />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
