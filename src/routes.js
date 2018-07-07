import App from './containers/App';
import Home from './containers/Home';
import Explore from './containers/Explore';
import Profile from './containers/Profile';

const routes = [
	{
		path: '/',
		component: App,
		indexRoute: {
			component: Home
		},
		childRoutes: [
			{
				path: 'explore',
				component: Explore
			},
			{
				path: 'profile',
				component: Profile
			}
		]
	}
];

export default routes;
