export default {
	id: 'css-color-6',
	title: 'CSS Color Module Level 6',
	link: 'css-color-6',
	status: 'experimental',
	values: {
		properties: [
			'color',
			'background-color',
			'border-color',
			'text-decoration-color',
			'column-rule-color',
		],
		'color-layers()': {
			link: '#funcdef-color-layers',
			tests: [
				'color-layers(red, blue)',
				'color-layers(rgb(255 0 0 / 50%), blue)',
				'color-layers(multiply, red, blue)',
				'color-layers(normal, rgb(0 0 0 / 50%), white)',
				'color-layers(red, rgb(0 0 255 / 50%), rgb(0 255 0 / 25%))',
			],
		},
		'contrast-color() with wcag2': {
			link: '#contrast-color',
			tests: [
				'contrast-color(wheat tbd-bg wcag2(aa), bisque, darkgoldenrod, olive)',
				'contrast-color(white wcag2, black, white)',
				'contrast-color(white wcag2(aaa), black, white)',
			],
		},
	},
};
