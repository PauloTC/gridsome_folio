// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Portafolio Web',
	chainWebpack: config => {
		config.module
			.rule('pug')
			.test(/\.pug$/)
			.use('pug-plain-loader')
				.loader('pug-plain-loader')
	},
	plugins: [
		{
			use: '@gridsome/source-datocms',
			options: {
				apiToken: '55b710178d0a639962023edea7093d', // required
				previewMode: false,
				apiUrl: 'https://site-api.datocms.com',
				typeName: 'DatoCms'
			}
		}
	]
}