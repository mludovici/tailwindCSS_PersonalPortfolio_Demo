// postcss.config.js

const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		cssnano({
			preset: 'default',
		}),
		purgecss({
			content: ['./**/*.html', './src/**/*.vue', './src/**/*.jsx'],
			defaultExtractor: (content) =>
				content.match(/[\w-/:]+(?<!:)/g) || [],
		}),
	],
}