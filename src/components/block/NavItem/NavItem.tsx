import cn from 'clsx';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import { sNavActive, sNavIcon, sNavItem, sNavLink, sNavTitle } from './NavItem.css';

export interface NavItemProps {
	className?: string;
	title: ReactNode;
	icon: ReactNode;
	href: LinkProps['href'];
	active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ className, title, icon, href, active }) => {
	return (
		<li className={cn(sNavItem, active && sNavActive, className)}>
			<Link href={href} className={cn(sNavLink)}>
				<figure className={cn(sNavIcon)}>{icon}</figure>
				<p className={cn(sNavTitle)}>{title}</p>
			</Link>
		</li>
	);
};
