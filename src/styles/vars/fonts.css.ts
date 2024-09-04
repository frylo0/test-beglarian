import { fontFace } from '@vanilla-extract/css';

const inter = fontFace([
	{
		src: 'url(/fonts/inter/Inter-VariableFont_opsz,wght.ttf) format(truetype)',
		fontDisplay: 'swap',
	},
]);

export const fonts = {
	inter,
};
