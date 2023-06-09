import * as React from 'react';
import StartScreen from './concepts/StartScreen';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const IndexPage = () => {
	return (
		<Layout>
			<StartScreen />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <SEO title='Home / William Cougan' />;
