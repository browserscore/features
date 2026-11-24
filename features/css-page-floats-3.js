export default {
	id: 'css-page-floats-3',
	title: 'CSS Page Floats',
	link: 'css-page-floats-3',
	status: 'experimental',
	properties: {
		'float-reference': {
			link: '#propdef-float-reference',
			tests: ['inline', 'column', 'region', 'page'],
		},
		'float-defer': {
			link: '#propdef-float-defer',
			tests: [
				'none',
				'last',
				'1',
				'-1',
				'2',
			],
		},
		'float-offset': {
			link: '#propdef-float-offset',
			tests: ['0', '10px', '5%', '-1em'],
		},
	},
	values: {
		properties: ['float'],
		'snap-block()': {
			link: '#funcdef-float-snap-block',
			tests: [
				'snap-block(2em)',
				'snap-block(2em, start)',
				'snap-block(2em, end)',
				'snap-block(2em, near)',
			],
		},
		'snap-inline()': {
			link: '#funcdef-float-snap-inline',
			tests: [
				'snap-inline(2em)',
				'snap-inline(2em, left)',
				'snap-inline(2em, right)',
				'snap-inline(2em, near)',
			],
		},
	},
};
