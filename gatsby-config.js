/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `William Cougan`,
		siteUrl: `https://www.williamcougan.com`,
	},
	plugins: [
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
				web: [
					{
						name: `Press Start 2P`,
						file: `https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap`,
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-styled-components',
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/icon.png',
			},
		},
	],
};
