import { style } from '@vanilla-extract/css';

import { colors, font, fonts } from '@/styles/bundle.css';

export const sCard = style({
	backgroundColor: colors.white,
	borderRadius: 20,
	border: `1px solid #F3F3F3`,
	display: `flex`,
	flexDirection: 'row',
});

export const sCardItem = style({
	padding: '16px 12px',
	display: 'flex',
	flexDirection: 'row',
	gap: 8,
	alignItems: 'center',

	selectors: {
		'&:nth-child(5)': {
			gridColumn: '1 / 3',

			'@media': {
				[`(max-width: 350px)`]: {
					gridColumn: '1 / 2',
				},
			},
		},
	},
});

export const sCardTitle = style({
	...font(fonts.inter, 500, 16, 20),
});

export const sCardIcon = style({
	padding: 8,
	position: 'relative',
	overflow: 'hidden',
	width: 40,
	minWidth: 40,
	height: 40,

	'::before': {
		content: '',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: '50%',
		backgroundColor: 'var(--icon-color)',
		opacity: 0.1,
	},
});
