export default {
	id: 'css-navigation-1',
	title: 'CSS Navigation Module Level 1',
	link: 'css-navigation-1',
	status: 'experimental',
	atrules: {
		'@location': {
			link: '#at-ruledef-location',
			preludeRequired: true,
			prelude: '--foo',
			contents: 'pattern: url-pattern("/foo/*")',
			descriptors: {
				pattern: {
					link: '#descdef-location-pattern',
					values: [
						'url-pattern("/foo")',
						'url-pattern("/foo/:id")',
						'url-pattern("https://example.com/*")',
					],
				},
				protocol: {
					link: '#descdef-location-protocol',
					values: ['"https"'],
				},
				hostname: {
					link: '#descdef-location-hostname',
					values: ['"example.com"'],
				},
				port: {
					link: '#descdef-location-port',
					values: ['"8080"'],
				},
				pathname: {
					link: '#descdef-location-pathname',
					values: ['"/foo/*"'],
				},
				search: {
					link: '#descdef-location-search',
					values: ['"?a=b"'],
				},
				hash: {
					link: '#descdef-location-hash',
					values: ['"#foo"'],
				},
				'base-url': {
					link: '#descdef-location-base-url',
					values: ['stylesheet', 'document', 'url(https://example.com/)'],
				},
			},
		},
	},
	selectors: {
		':link-to()': {
			link: '#link-to-pseudo',
			tests: [':link-to(url-pattern("/foo"))', ':link-to(--foo)'],
		},
		':navigation-source': {
			link: '#navigation-source-pseudo',
			tests: [':navigation-source'],
		},
	},
};
