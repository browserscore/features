export default {
	id: 'css-page-3',
	title: 'Paged Media Module Level 3',
	link: 'css-page-3',
	status: 'experimental',
	properties: {
		page: {
			link: '#using-named-pages',
			tests: ['auto', 'customName'],
		},
	},
	atrules: {
		'@page': {
			link: '#at-page-rule',
			isGroup: true,
			atrules: {
				'@top-left-corner': {
					link: '#at-ruledef-page-top-left-corner',
					contents: 'content: "a"',
				},
				'@top-left': {
					link: '#at-ruledef-page-top-left',
					contents: 'content: "a"',
				},
				'@top-center': {
					link: '#at-ruledef-page-top-center',
					contents: 'content: "a"',
				},
				'@top-right': {
					link: '#at-ruledef-page-top-right',
					contents: 'content: "a"',
				},
				'@top-right-corner': {
					link: '#at-ruledef-page-top-right-corner',
					contents: 'content: "a"',
				},
				'@bottom-left-corner': {
					link: '#at-ruledef-page-bottom-left-corner',
					contents: 'content: "a"',
				},
				'@bottom-left': {
					link: '#at-ruledef-page-bottom-left',
					contents: 'content: "a"',
				},
				'@bottom-center': {
					link: '#at-ruledef-page-bottom-center',
					contents: 'content: "a"',
				},
				'@bottom-right': {
					link: '#at-ruledef-page-bottom-right',
					contents: 'content: "a"',
				},
				'@bottom-right-corner': {
					link: '#at-ruledef-page-bottom-right-corner',
					contents: 'content: "a"',
				},
				'@left-top': {
					link: '#at-ruledef-page-left-top',
					contents: 'content: "a"',
				},
				'@left-middle': {
					link: '#at-ruledef-page-left-middle',
					contents: 'content: "a"',
				},
				'@left-bottom': {
					link: '#at-ruledef-page-left-bottom',
					contents: 'content: "a"',
				},
				'@right-top': {
					link: '#at-ruledef-page-right-top',
					contents: 'content: "a"',
				},
				'@right-middle': {
					link: '#at-ruledef-page-right-middle',
					contents: 'content: "a"',
				},
				'@right-bottom': {
					link: '#at-ruledef-page-right-bottom',
					contents: 'content: "a"',
				},
			},
			preludes: {
				':blank': {},
				'custom': {
					isGroup: false,
					children: [
						'custom, custom2',
						'custom:left',
						'custom:right',
						'custom:first',
					]
				}
			},
			descriptors: {
				size: {
					link: '#page-size-prop',
					values: [
						'4in 6in',
						'4em 6em',
						'auto',
						'landscape',
						'portrait',
						'a3',
						'a4',
						'a5',
						'b4',
						'b5',
						'jis-b4',
						'jis-b5',
						'ledger',
						'legal',
						'letter',
						'a3 landscape',
						'a3 portrait',
						'landscape a3',
						'portrait a3',
					],
				},
				'page-orientation': {
					link: '#page-orientation-prop',
					values: ['upright', 'rotate-left', 'rotate-right'],
				},
				marks: {
					link: '#marks',
					values: ['none', 'crop', 'cross', 'crop cross'],
				},
				bleed: {
					link: '#bleed',
					values: ['auto', '6pt'],
				},
			},
		},
	},
};
