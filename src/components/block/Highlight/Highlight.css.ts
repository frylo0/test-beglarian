import { style } from '@vanilla-extract/css';

import { font, fonts } from '@/styles/bundle.css';

export const sHighlight = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
	width: '25%',
	alignItems: 'center',
});

export const sHTitle = style({
	textAlign: 'center',
	...font(fonts.inter, 400, 14, 20),
});

export const sHIcon = style({
	width: 58,
	height: 58,
	borderRadius: '50%',
	backgroundColor: '#FF7355',
	padding: 15,
});
