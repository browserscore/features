export default {
	id: 'css-gcpm-4',
	title: 'CSS Generated Content for Paged Media Module Level 4',
	link: 'css-gcpm-4',
	status: 'experimental',
	properties: {
		'copy-into': {
			link: '#propdef-copy-into',
			tests: [
				'none',
				'foo content(text)',
				'foo content(text), bar content(before)',
				'foo replace',
			],
		},
	},
	selectors: {
		':first-of-page': {
			link: '#selectordef-first-of-page',
			tests: [':first-of-page'],
		},
		':last-of-page': {
			link: '#selectordef-last-of-page',
			tests: [':last-of-page'],
		},
		':nth-of-page()': {
			link: '#selectordef-nth-of-page-n',
			tests: [':nth-of-page(1)', ':nth-of-page(2n+1)', ':nth-of-page(even)'],
		},
		':start-of-page': {
			link: '#selectordef-start-of-page',
			tests: [':start-of-page'],
		},
	},
};
