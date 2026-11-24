export default {
	id: 'css-content-3',
	title: 'CSS Generated Content Module Level 3',
	link: 'css-content-3',
	status: 'experimental',
	properties: {
		quotes: {
			link: '#quotes',
			tests: ['auto'],
		},
		content: {
			link: '#alt',
			tests: ['url(./img/star.png) / "New!"', '"\\25BA" / ""'],
		},
		'bookmark-level': {
			link: '#bookmark-level',
			tests: ['none', '1', '2', '6'],
		},
		'bookmark-label': {
			link: '#bookmark-label',
			tests: ['content(text)', '"foo"', 'attr(title)', '"foo" content(text)'],
		},
		'bookmark-state': {
			link: '#bookmark-state',
			tests: ['open', 'closed'],
		},
		'string-set': {
			link: '#string-set',
			tests: [
				'none',
				'title "foo"',
				'title content(text)',
				'title "a" "b", chapter "c"',
				'title attr(title)',
			],
		},
	},
	values: {
		properties: ['content'],
		'leader()': {
			link: '#leaders',
			tests: [
				'leader(dotted)',
				'leader(solid)',
				'leader(space)',
				'leader(".")',
				'leader(" . ")',
			],
		},
		'target-counter()': {
			link: '#target-counter',
			tests: [
				'target-counter(attr(href url), page)',
				'target-counter("#foo", page)',
				'target-counter(url(#foo), page)',
				'target-counter(attr(href url), page, upper-roman)',
			],
		},
		'target-counters()': {
			link: '#target-counters',
			tests: [
				'target-counters(attr(href url), item, ".")',
				'target-counters("#foo", item, ".")',
				'target-counters(url(#foo), item, ".", upper-roman)',
			],
		},
	},
};
