export default {
	id: 'selectors-5',
	title: 'Selectors Level 5',
	link: 'selectors-5',
	status: 'experimental',
	selectors: {
		':local-link()': {
			link: '#local-pseudo',
			tests: [
				':local-link(1)',
			],
		},
		':state()': {
			link: '#custom-state',
			tests: [':state(stuck)'],
		},
		'Reference selector': {
			link: '#idref-combinators',
			tests: [
				'label /for/ input',
			],
		},
		':heading': {
			link: '#heading-pseudo',
			tests: [':heading'],
		},
		':heading()': {
			link: '#heading-functional-pseudo',
			tests: [':heading(1)', ':heading(1, 2)', ':heading(2n)', ':heading(1, 3, 5)'],
		},
		':interest-source': {
			link: '#selectordef-interest-source',
			tests: [':interest-source'],
		},
		':interest-target': {
			link: '#selectordef-interest-target',
			tests: [':interest-target'],
		},
	},
};
