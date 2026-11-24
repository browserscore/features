export default {
	id: 'css-extensions-1',
	title: 'CSS Extensions',
	link: 'css-extensions-1',
	status: 'experimental',
	atrules: {
		'@custom-selector': {
			link: '#custom-selectors',
			contents: false,
			preludeRequired: true,
			preludes: [
				':--heading h1, h2, h3, h4, h5, h6',
				':--foo .foo',
				':--foo-bar .foo, .bar',
			],
		},
	},
};
