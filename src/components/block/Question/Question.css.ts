import { style } from '@vanilla-extract/css';

import { colors, font, fonts } from '@/styles/bundle.css';

export const sQuestion = style({
	...font(fonts.inter, 400, 18, 24),
	width: 71,
	height: 71,
	position: 'relative',
	backgroundColor: colors.white,
	boxShadow: `0px 0px 4px 0px #12192B0A`,
	borderRadius: '50%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	cursor: 'pointer',
});

export const sQuestionEnabled = style({});

export const sQuestionShadow = style({
	position: 'absolute',
	bottom: 0,
	right: 0,
});

export const sQuestionCheckmark = style({
	position: 'absolute',
	top: 0,
	right: 0,
});
