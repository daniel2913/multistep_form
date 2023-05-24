module.exports = {
	extends: [
		'standard',
		'plugin:react/recommended'
	],
	rules: {
		indent: ['warn', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react/prop-types': 0
	}
}
