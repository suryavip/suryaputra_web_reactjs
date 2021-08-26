import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/analytics";

import firebaseConfig from './firebaseConfig';

import './index.scss';

import Home from './screens/Home';
import Project from './screens/Project';
import RequestResume from './screens/RequestResume';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path="/request-resume"><RequestResume /></Route>
				<Route exact path="/project/:projectId" render={(props) => <Project projectId={props.match.params.projectId} />} />
				<Route path="/"><Home /></Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
