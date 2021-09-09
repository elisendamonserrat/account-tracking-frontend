import React from 'react';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';

const App = (props) => {
	const { isLoading } = props;
	if (isLoading) {
		return <div>loading ... </div>;
	}
	return (
		<div className="container">
			<h1>Basic React Authentication</h1>
			<Navbar />
			<Switch>
				<AnonRoute path="/signup" component={Signup} />
				<AnonRoute path="/login" component={Login} />
				<PrivateRoute path="/private" component={Private} />
			</Switch>
		</div>
	);
}

export default withAuth(App);
