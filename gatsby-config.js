require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `William Cougan`,
		siteUrl: `https://williamcougan.com`,
		description: `"Discover the best version of yourself, one click at a time. - ChatGPT" - William Cougan`,
		image: '/site-img.png',
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
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				trackingIds: [process.env.GA_MEASUREMENT_ID],
			},
		},
	],
};
