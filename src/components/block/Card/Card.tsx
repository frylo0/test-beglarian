import cn from 'clsx';
import Link, { LinkProps } from 'next/link';
import { CSSProperties, ReactNode } from 'react';

import { sCard, sCardIcon, sCardItem, sCardTitle } from './Card.css';

export interface CardProps {
	className?: string;
	href: LinkProps['href'];
	icon: ReactNode;
	iconColor?: CSSProperties['color'];
	title: ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, href, title, icon, iconColor = '#6B2ABC' }) => {
	const cssVars = {
		'--icon-color': iconColor,
	} as CSSProperties;

	return (
		<Link className={cn(sCardItem, sCard, className)} style={cssVars} href={href}>
			<figure className={cn(sCardIcon)}>{icon}</figure>
			<p className={cn(sCardTitle)}>{title}</p>
		</Link>
	);
};
