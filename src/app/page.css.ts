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

export const sHighlights = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	marginBlockStart: 24,
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
