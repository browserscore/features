export default {
	id: 'css-images-5',
	title: 'CSS Images Module Level 5',
	link: 'css-images-5',
	status: 'experimental',
	properties: {
		'image()': {
			link: '#image-notation',
			dataType: 'image',
			tests: [
				"image('sprites.png#xywh=10,30,60,20')",
				"image('sprites.png#xywh=pixel:10,30,60,20')",
				"image('sprites.png#xywh=percent:10,30,60,20')",
				"image('image.png')",
				"image(url('image.png'))",
				"image(ltr 'ltr.png')",
				"image(rtl 'rtl.png')",
				"image('dark.png', black)",
			],
		},
		'object-view-box': {
			link: '#the-object-view-box',
			tests: [
				'none',
				'inset(10% round 10% 40% 10% 40%)',
				'rect(10% 20px 30% 40px)',
				'xywh(10% 40% 100px 200px round 10% 40% 10% 40%)',
			],
		},
	},
};
