import cn from 'clsx';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import { sHIcon, sHighlight, sHTitle } from './Highlight.css';

export interface HighlightProps {
	className?: string;
	title: ReactNode;
	icon: ReactNode;
	href: LinkProps['href'];
}

export const Highlight: React.FC<HighlightProps> = ({ className, href, title, icon }) => {
	return (
		<Link href={href} className={cn(sHighlight, className)}>
			<figure className={cn(sHIcon)}>{icon}</figure>
			<p className={cn(sHTitle)}>{title}</p>
		</Link>
	);
};
