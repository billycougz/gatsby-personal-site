exports.createPages = async ({ actions }) => {
	const conceptIds = ['Flappy-Tanooki', 'Day-And-Nite'];
	conceptIds.forEach((id) => {
		actions.createPage({
			path: `/concept/${id}`,
			component: require.resolve('./src/pages/ConceptTemplate.js'),
			context: {
				id,
			},
		});
	});
};
