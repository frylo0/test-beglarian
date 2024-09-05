'use client';

import cn from 'clsx';
import Link from 'next/link';

import SVG_Book from '@/assets/vector/book.svg';
import SVG_Bookmark from '@/assets/vector/bookmark.svg';
import SVG_Chart from '@/assets/vector/chart.svg';
import SVG_Chevron from '@/assets/vector/chevron.svg';
import SVG_Crown from '@/assets/vector/crown.svg';
import SVG_Fire from '@/assets/vector/fire.svg';
import SVG_Gamepad from '@/assets/vector/gamepad.svg';
import SVG_Graduation from '@/assets/vector/graduation.svg';
import SVG_Home from '@/assets/vector/home.svg';
import SVG_Learn from '@/assets/vector/learn.svg';
import SVG_Pen from '@/assets/vector/pen.svg';
import SVG_Profile from '@/assets/vector/profile.svg';
import SVG_Rank from '@/assets/vector/rank.svg';
import SVG_Rocket from '@/assets/vector/rocket.svg';
import SVG_Route from '@/assets/vector/route.svg';
import SVG_Sign from '@/assets/vector/sign.svg';
import SVG_TvPlay from '@/assets/vector/tv-play.svg';
import { Card } from '@/components/block/Card/Card';
import { sCard } from '@/components/block/Card/Card.css';
import { Highlight } from '@/components/block/Highlight/Highlight';
import { NavItem } from '@/components/block/NavItem/NavItem';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { sDevice } from '@/components/common/Adaptive/Adaptive.css';
import { useApp$ } from '@/stores/app.store';
import {
	sArrow,
	sBadge,
	sBadges,
	sBar,
	sCards,
	sCategory,
	sCurrentTest,
	sDash,
	sDashEnabled,
	sHeader,
	sHighlights,
	sIcon,
	sInfo,
	sLabel,
	sMain,
	sNavbar,
	sNavList,
	sNavMenu,
	sProgress,
	sText,
	sTitle,
} from './page.css';

export default function Page() {
	const app$ = useApp$();

	const dashes = app$.learning;

	const passedCount = dashes.filter((item) => item.answered).length;
	const totalCount = dashes.length;

	return (
		<main className={cn(sMain, sDevice)}>
			<Adaptive>
				<header className={cn(sHeader)}>
					<h1 className={cn(sLabel)}>Ray Driving Theory</h1>
					<div className={cn(sBadges)}>
						<div className={cn(sBadge)}>
							<SVG_Crown />
						</div>
						<div className={cn(sBadge)}>
							<SVG_Fire /> 13
						</div>
					</div>
				</header>

				<Link href="/learning" className={cn(sCurrentTest, sCard)}>
					<div className={cn(sInfo)}>
						<figure className={cn(sIcon)}>
							<SVG_Graduation />
						</figure>

						<h2 className={cn(sTitle)}>Learning</h2>
						<p className={cn(sCategory)}>Category B</p>

						<button className={cn(sArrow)}>
							<SVG_Chevron />
						</button>
					</div>

					<div className={cn(sProgress)}>
						<p className={cn(sText)}>
							{passedCount} questions out of {totalCount} passed
						</p>
						<div className={cn(sBar)}>
							{dashes.map((_, i) => (
								<div className={cn(sDash, i < passedCount && sDashEnabled)} key={i} />
							))}
						</div>
					</div>
				</Link>

				<div className={cn(sCards)}>
					<Card icon={<SVG_Learn />} title="DVSA Exam" href="#" iconColor="#FF2045" />
					<Card icon={<SVG_Rocket />} title="Express mode" href="#" />
					<Card icon={<SVG_TvPlay />} title="Hazard perception" href="#" />
					<Card icon={<SVG_Sign />} title="Road signs" href="#" />
					<Card icon={<SVG_Gamepad />} title="Multiplayer Learning" href="#" />
				</div>

				<div className={cn(sHighlights)}>
					<Highlight icon={<SVG_Pen />} title="Mistakes" href="#" />
					<Highlight icon={<SVG_Chart />} title="Statistics" href="#" />
					<Highlight icon={<SVG_Book />} title="Highway Code" href="#" />
					<Highlight icon={<SVG_Bookmark />} title="Favorites" href="#" />
				</div>
			</Adaptive>

			<nav className={cn(sNavbar, sDevice)}>
				<menu className={cn(sNavMenu)}>
					<ul className={cn(sNavList)}>
						<NavItem href="#" icon={<SVG_Home />} title="Home" active />
						<NavItem href="#" icon={<SVG_Route />} title="Your plan" />
						<NavItem href="#" icon={<SVG_Rank />} title="Leaderboard" />
						<NavItem href="#" icon={<SVG_Profile />} title="Profile" />
					</ul>
				</menu>
			</nav>
		</main>
	);
}
