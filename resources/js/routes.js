const Home = () => import('./components/Home.vue');
const Comics = () => import('./components/Comics.vue');
const Examenes = () => import('./components/Examenes.vue');


export const routes = [

	{
		name: 'home',
		path: '/',
		component: Home

	},
	{
		name: 'comics',
		path: '/comics',
		component: Comics

	},
	{
		name: 'examenes',
		path: '/examenes',
		component: Examenes

	},


];