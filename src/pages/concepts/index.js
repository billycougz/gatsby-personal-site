import DayAndNite from './DayAndNite';
import FlappyTanooki from './FlappyTanooki';
import StartScreen from './StartScreen';

export default [
	{
		id: 'Home',
		name: `Home`,
		component: StartScreen,
	},
	{
		id: 'flappy-tanooki',
		name: 'Flappy Tanooki',
		component: FlappyTanooki,
	},
	{
		id: 'day-and-nite',
		name: `Day And Nite`,
		component: DayAndNite,
	},
];
