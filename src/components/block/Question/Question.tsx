import cn from 'clsx';

import SVG_Check from '@/assets/vector/check.svg';
import SVG_Subtract from '@/assets/vector/subtract.svg';
import { sQuestion, sQuestionCheckmark, sQuestionEnabled, sQuestionShadow } from './Question.css';

export interface QuestionProps {
	className?: string;
	id: number;
	enabled: boolean;
	onClick?: (id: number) => void;
}

export const Question: React.FC<QuestionProps> = ({ className, id, enabled, onClick }) => {
	const handleClick = () => onClick?.(id);

	return (
		<li className={cn(sQuestion, enabled && sQuestionEnabled, className)} onClick={handleClick}>
			{id}
			<SVG_Subtract className={cn(sQuestionShadow)} />
			{enabled && <SVG_Check className={cn(sQuestionCheckmark)} />}
		</li>
	);
};
