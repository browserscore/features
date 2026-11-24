export default {
	id: 'css-animations-2',
	title: 'CSS Animations Level 2',
	link: 'css-animations-2',
	status: 'experimental',
	properties: {
		'animation-composition': {
			link: '#animation-composition',
			tests: ['replace', 'add', 'accumulate', 'replace, add, accumulate'],
		},
		'animation-duration': {
			link: '#animation-duration',
			tests: ['auto'],
		},
		'animation-timeline': {
			link: '#animation-timeline',
			tests: [
				'auto',
				'none',
				'custom-timeline',
				'auto, none, custom-timeline',
			],
		},
		animation: {
			link: '#animation-shorthand',
			tests: [
				'1s both infinite auto',
				'1s both infinite my-animation --animation-timeline'
			],
		},
		'animation-delay-start': {
			link: '#propdef-animation-delay-start',
			tests: [
				'0s',
				'1s',
				'-1s',
				'100ms',
				'1s, 2s',
			],
		},
		'animation-delay-end': {
			link: '#propdef-animation-delay-end',
			tests: ['0s', '1s', '100ms', '1s, 2s'],
		},
	},
	globals: {
		CSSAnimation: {
			link: '#the-CSSAnimation-interface',
			mdnGroup: 'DOM',
			members: ['animationName'],
		},
	},
};
