import DayAndNite from './pages/DayAndNite';
import FlappyTanooki from './pages/FlappyTanooki';
import StartScreen from './pages/StartScreen';

export default [
	{
		id: 'Home',
		name: `Home`,
		component: StartScreen,
	},
	{
		id: 'Flappy-Tanooki',
		name: 'Flappy Tanooki',
		component: FlappyTanooki,
	},
	{
		id: 'Day-And-Nite',
		name: `Day And Nite`,
		component: DayAndNite,
	},
];
