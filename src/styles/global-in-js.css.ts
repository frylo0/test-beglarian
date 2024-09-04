import { globalStyle } from '@vanilla-extract/css';

import { colors, fonts } from './bundle.css';

globalStyle('html', {
	fontSize: '12px',
	background: '#333',
	color: colors.black,
	fontFamily: fonts.inter,
	fontWeight: 'normal',
});
