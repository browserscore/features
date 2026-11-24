export default {
	id: 'pointer-animations-1',
	title: 'Pointer-driven Animations',
	link: 'pointer-animations-1',
	status: 'experimental',
	properties: {
		'pointer-timeline-name': {
			link: '#propdef-pointer-timeline-name',
			tests: ['none', '--p', '--p, --q', '--p, none'],
		},
		'pointer-timeline-axis': {
			link: '#propdef-pointer-timeline-axis',
			tests: [
				'block',
				'inline',
				'x',
				'y',
				'x, y',
				'block, inline',
			],
		},
		'pointer-timeline': {
			link: '#propdef-pointer-timeline',
			tests: [
				'--p',
				'--p block',
				'--p x',
				'--p y',
				'--p x, --q y',
				'none',
			],
		},
		'animation-range-center': {
			link: '#propdef-animation-range-center',
			tests: [
				'normal',
				'50%',
				'100px',
				'source',
				'target',
				'source 50%',
				'target 25%',
				'normal, 50%',
			],
		},
	},
};
