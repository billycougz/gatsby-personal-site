import React from 'react';
import Layout from '../components/layout';
import Menu from '../components/Menu';
import { navigate } from 'gatsby';
import { SEO } from '../components/seo';
import Concepts from '../concepts-config';

/**
 * Template that renders the applicable concept component
 * See gatsby-node.js for configuration, including pageContext and dynamic routes
 */
const ConceptTemplate = ({ pageContext }) => {
	const activeConceptId = pageContext.id;
	const { name: activeName, component: ActiveConcept } = Concepts.find(({ id }) => id === activeConceptId) || {};

	const handleOptionClick = (id) => {
		if (id === 'Home') {
			return navigate('/');
		}
		return navigate(`/concept/${id}`, { replace: true });
	};

	return (
		<Layout>
			<SEO title={`${activeName} / Concept / William Cougan`} />
			{activeConceptId !== 'Home' && (
				<Menu selectedOption={activeConceptId} options={Concepts} onClick={handleOptionClick} />
			)}

			{ActiveConcept ? <ActiveConcept /> : null}
		</Layout>
	);
};

export default ConceptTemplate;
