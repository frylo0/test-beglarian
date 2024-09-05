import { globalStyle, style } from '@vanilla-extract/css';

import { font, fonts } from '@/styles/bundle.css';

export const sNavItem = style({
	width: '25%',
});

export const sNavActive = style({});

export const sNavLink = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 4,
	padding: '8px 5px',
});

export const sNavIcon = style({
	padding: 8,
	position: 'relative',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',

	'::after': {
		content: '',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		opacity: 0.25,
		borderRadius: 10,
	},

	selectors: {
		[`${sNavActive} &::after`]: {
			backgroundColor: '#FFE3DD',
		},
	},
});

globalStyle(`${sNavActive} ${sNavIcon} svg`, {
	fill: '#FF7355',
});

export const sNavTitle = style({
	...font(fonts.inter, 500, 12, 14),

	selectors: {
		[`${sNavActive} &`]: {
			color: '#FF7355',
		},
	},
});
