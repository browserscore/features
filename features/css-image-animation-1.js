export default {
	id: 'css-image-animation-1',
	title: 'CSS Image Animation Module Level 1',
	link: 'css-image-animation-1',
	status: 'experimental',
	properties: {
		'image-animation': {
			link: '#propdef-image-animation',
			tests: ['normal', 'paused', 'stopped', 'running'],
		},
	},
	selectors: {
		':animated-image': {
			link: '#selectordef-animated-image',
			tests: [':animated-image'],
		},
	},
};
