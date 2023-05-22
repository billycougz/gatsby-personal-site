exports.createPages = async ({ actions }) => {
	const { createPage } = actions;
	const conceptIds = ['DayAndNite'];
	conceptIds.forEach((conceptId) => {
		createPage({
			path: `/concept/${conceptId}`,
			component: require.resolve('./src/pages/concept/ConceptTemplate.js'),
			context: {
				conceptId,
			},
		});
	});
};
