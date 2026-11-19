export default {
	id: 'css-link-params-1',
	title: 'CSS Linked Parameters',
	link: 'css-link-params-1',
	status: 'experimental',
	properties: {
		'link-parameters': {
			link: '#link-param-prop',
			tests: [
				'none',
				'param(--foo)',
				'param(--foo 10px)',
				'param(--foo, --bar)',
				'param(--foo 10px, --bar)',
			],
		},
	},
	values: {
		properties: ['background-image'],
		'url() with param()': {
			link: '#setting-url',
			tests: 'url("https://example.com/image.svg" param(--bg-color: white))',
			tests: 'url("https://example.com/image.svg" param(--bg-color <color>: white))',
			tests: 'url("https://example.com/image.svg" param(--size type(<length> | <percentage>): 100px))',
			tests: 'url("https://example.com/image.svg" param(color: firebrick))',
			tests: 'url("https://example.com/image.svg" param(accent-color: firebrick))',
		}
	}
};
