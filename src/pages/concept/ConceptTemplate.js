import React from 'react';
import Layout from '../../components/layout';
import Menu from '../../components/Menu';
import DayAndNight from '../DayAndNite';
import StartScreen from '../StartScreen';
import { navigate } from 'gatsby';
import { SEO } from '../../components/seo';

const ConceptTemplate = ({ pageContext }) => {
	const activeConceptId = pageContext.conceptId;
	const conceptMap = {
		Home: { name: `Home`, component: StartScreen },
		DayAndNite: { name: `DayAndNite`, component: DayAndNight },
	};
	const concepts = Object.values(conceptMap);
	const { name: activeName, component: ActiveConcept } = conceptMap[activeConceptId] || {};
	const handleOptionClick = (name) => {
		return name === 'Home' ? navigate('/') : navigate(`/concept/${name}`, { replace: true });
	};
	return (
		<Layout>
			<SEO title={`${activeConceptId} / Concept / William Cougan`} />
			{activeConceptId !== 'Home' && (
				<Menu selectedOption={activeName} options={concepts.map(({ name }) => name)} onClick={handleOptionClick} />
			)}

			{ActiveConcept ? <ActiveConcept /> : null}
		</Layout>
	);
};

export default ConceptTemplate;
