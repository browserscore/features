export default {
	id: 'css-overflow-5',
	title: 'CSS Overflow Module Level 5',
	link: 'css-overflow-5',
	status: 'experimental',
	properties: {
		'scroll-target-group': {
			link: '#scroll-target-group',
			tests: [
				'none',
				'auto',
			],
		},
		'scroll-marker-group': {
			link: '#scroll-marker-group-property',
			tests: [
				'none',
				'before',
				'after',
			],
		},
		'scroll-axis-lock': {
			link: '#propdef-scroll-axis-lock',
			tests: ['auto', 'none'],
		},
	},
	selectors: {
		'::scroll-button()': {
			link: '#scroll-buttons',
			tests: [
				'::scroll-button(*)',
				'::scroll-button(up)',
				'::scroll-button(down)',
				'::scroll-button(left)',
				'::scroll-button(right)',
				'::scroll-button(block-start)',
				'::scroll-button(block-end)',
				'::scroll-button(inline-start)',
				'::scroll-button(inline-end)',
				'::scroll-button(prev)',
				'::scroll-button(next)',
			],
		},
		'::scroll-marker': {
			link: '#scroll-marker-pseudo',
			tests: ['::scroll-marker'],
		},
		'::scroll-marker-group': {
			link: '#scroll-marker-group-pseudo',
			tests: ['::scroll-marker-group'],
		},
		':target-current': {
			link: '#active-scroll-marker',
			tests: [':target-current'],
		},
		'::nth-fragment()': {
			link: '#selectordef-nth-fragment',
			tests: [
				'::nth-fragment(1)',
				'::nth-fragment(2n)',
				'::nth-fragment(odd)',
				'::nth-fragment(n+2)',
			],
		},
		':target-before': {
			link: '#selectordef-target-before',
			tests: [':target-before'],
		},
		':target-after': {
			link: '#selectordef-target-after',
			tests: [':target-after'],
		},
	},
};
