exports.createPages = async ({ actions }) => {
	const conceptIds = ['flappy-tanooki', 'day-and-nite'];
	conceptIds.forEach((id) => {
		actions.createPage({
			path: `/concept/${id}`,
			component: require.resolve('./src/pages/concepts/ConceptTemplate.js'),
			context: {
				id,
			},
		});
	});
};
