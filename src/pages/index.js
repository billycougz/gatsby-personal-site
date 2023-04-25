import * as React from 'react';
import StartScreen from './StartScreen';
import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<Layout>
			<StartScreen />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>William Cougan</title>;
