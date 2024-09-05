'use client';

import cn from 'clsx';
import { useRouter } from 'next/navigation';

import SVG_ArrowBack from '@/assets/vector/arrow-back.svg';
import { Question } from '@/components/block/Question/Question';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { sDevice } from '@/components/common/Adaptive/Adaptive.css';
import { useApp$ } from '@/stores/app.store';
import { sBtnBack, sGrid, sHeader, sMain, sSubtitle, sTitle } from './page.css';

export default function Page() {
	const router = useRouter();
	const app$ = useApp$();

	const questions = app$.learning;
	const isLoading = !app$.ready;

	const handleBackClick = () => router.back();
	const handleQuestionClick = (id: number) => app$.toggleQuestionAnswer(id);

	return (
		<main className={cn(sMain, sDevice)}>
			<Adaptive>
				<header className={cn(sHeader)}>
					<button className={cn(sBtnBack)} onClick={handleBackClick}>
						<SVG_ArrowBack />
					</button>
					<h1 className={cn(sTitle)}>Learning</h1>
				</header>

				<h2 className={cn(sSubtitle)}>Tests</h2>

				{isLoading ? (
					<>Loading...</>
				) : (
					<ol className={cn(sGrid)}>
						{questions.map((question, i) => (
							<Question id={question.id} enabled={question.answered} key={i} onClick={handleQuestionClick} />
						))}
					</ol>
				)}
			</Adaptive>
		</main>
	);
}
