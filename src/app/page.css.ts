import { globalStyle, style } from '@vanilla-extract/css';

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
	justifyContent: 'space-between',
	padding: '15px 0',
});

export const sLabel = style({
	...font(fonts.inter, 500, 18, 26),
});

export const sBadges = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 8,
});

export const sBadge = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	backgroundColor: colors.white,
	padding: '4px 6px',
	borderRadius: 8,
	gap: 4,
	...font(fonts.inter, 500, 14, 20),
});

export const sCard = style({
	backgroundColor: colors.white,
	borderRadius: 20,
	border: `1px solid #F3F3F3`,
	display: `flex`,
	flexDirection: 'row',
});

export const sCurrentTest = style({
	flexDirection: 'column',
	padding: 24,
	gap: 16,
});

export const sInfo = style({
	display: 'grid',
	gridTemplateRows: `1fr 1fr`,
	gridTemplateColumns: `58px 1fr 24px`,
	gridTemplateAreas: `
		"icon title    arrow"
		"icon category arrow"`,
	gap: '0 16px',
});

export const sIcon = style({
	borderRadius: '50%',
	padding: 13,
	backgroundColor: '#FFE3DD',
	gridArea: 'icon',
});

export const sTitle = style({
	gridArea: 'title',
	alignSelf: 'end',
	...font(fonts.inter, 600, 20, 26),
});

export const sCategory = style({
	gridArea: 'category',
	alignSelf: 'start',
	...font(fonts.inter, 400, 14, 20),
	color: '#87898F',
});

export const sArrow = style({
	gridArea: 'arrow',
	padding: 2.5,
	backgroundColor: 'transparent',
	border: 'none',
	cursor: 'pointer',
});

export const sProgress = style({});

export const sText = style({
	...font(fonts.inter, 400, 14, 20),
});

export const sBar = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 3,
	marginBlockStart: 8,
});

export const sDash = style({
	height: 6,
	width: '100%',
	borderRadius: '1em',
	backgroundColor: '#52A754',
	opacity: 0.1,
});

export const sDashEnabled = style({
	opacity: 1,
});

export const sCards = style({
	display: 'grid',
	gridTemplateRows: `1fr 1fr 1fr`,
	gridTemplateColumns: `1fr 1fr`,
	gap: 8,
	marginBlockStart: 8,

	'@media': {
		[`(max-width: 350px)`]: {
			gridTemplateColumns: '1fr',
		},
	},
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

export const sHighlights = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	marginBlockStart: 24,
});

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

export const sNavbar = style({
	position: 'fixed',
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: colors.white,
	borderRadius: '24px 24px 0 0',
});

export const sNavMenu = style({
	width: '100%',
});

export const sNavList = style({
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
});

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
