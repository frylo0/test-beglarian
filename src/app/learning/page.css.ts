import { style } from '@vanilla-extract/css';

import { colors, font, fonts } from '@/styles/bundle.css';

export const sMain = style({
	color: colors.black,
	fontFamily: fonts.inter,
	backgroundColor: '#F9F9F9',

	minHeight: '100svh',
	paddingBlockStart: 48,
	paddingBlockEnd: 80 + 72, // Navbar height + Figma view padding
});

export const sHeader = style({
	display: 'flex',
	flexDirection: 'row',
	padding: '15px 0',
	gap: 16,
});

export const sBtnBack = style({
	backgroundColor: 'transparent',
	border: 'none',
	cursor: 'pointer',
});

export const sTitle = style({
	...font(fonts.inter, 500, 18, 26),
});

export const sSubtitle = style({
	padding: '14px 36px',
	width: 'fit-content',
	margin: 'auto',
	...font(fonts.inter, 500, 14, 20),
	textAlign: 'center',
	color: '#FF7355',
	borderBottom: '2px solid #FF7355',
});

export const sGrid = style({
	display: 'grid',
	gridTemplateRows: `auto`,
	gridTemplateColumns: `repeat(4, 1fr)`,
	gap: 15,
	marginBlockStart: 26,
});
