import { style } from '@vanilla-extract/css';

export const sAdaptive = style({
	margin: 'auto',
	width: 'calc(100% - 16px * 2)',
});

export const sDevice = style({
	maxWidth: 360,
	width: '100%',
	margin: 'auto',
});
