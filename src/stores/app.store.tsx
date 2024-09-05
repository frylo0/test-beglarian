'use client';

import { memo, useEffect } from 'react';
import { create } from 'zustand';

import { API_URL } from '@/constants/env';
import { LocalStorageKeys } from '@/constants/project';

type TQuestionItem = {
	id: number;
	question: string;
};

type TAnswerItem = {
	id: number;
	answered: boolean;
};

export type TQuestion = TQuestionItem & TAnswerItem;

type State = {
	ready: boolean;

	questions: TQuestionItem[];
	learning: TQuestion[];
};

type Actions = {
	init: () => Promise<void>;

	getQuestion: (id: number) => TQuestion;
	setQuestionAnswer: (id: number, answered: boolean) => void;
	toggleQuestionAnswer: (id: number) => void;
};

export const useApp$ = create<State & Actions>((set, get) => ({
	ready: false,

	questions: [],
	learning: [],

	async init() {
		const questions: State['questions'] = (await fetch(`${API_URL}/tests`).then((res) => res.json())).questions;
		set({ questions });

		const answersData = localStorage.getItem(LocalStorageKeys.Answers);
		const answers: TAnswerItem[] = answersData ? JSON.parse(answersData) : [];

		const learning: State['learning'] = [];
		for (const question of questions) {
			const answered = answers.find((item) => item.id === question.id)?.answered;

			learning.push({
				id: question.id,
				question: question.question,
				answered: answered || false,
			})
		}
		set({ learning });

		set({ ready: true });
	},

	getQuestion(id) {
		const question = get().learning.find((item) => item.id === id);
		if (!question) throw new Error(`No question with ID '${id}'`);
		return question;
	},

	setQuestionAnswer(id, answered) {
		const { learning } = get();

		const question = learning.find((item) => item.id === id);
		if (!question) throw new Error(`No question with ID '${id}'`);
		question.answered = answered;

		const answers: TAnswerItem[] = [];

		for (const question of learning) {
			answers.push({
				id: question.id,
				answered: question.answered,
			});
		}

		localStorage.setItem(LocalStorageKeys.Answers, JSON.stringify(answers));
		set({ learning });
	},

	toggleQuestionAnswer(id) {
		const { getQuestion, setQuestionAnswer } = get();
		const question = getQuestion(id);
		setQuestionAnswer(id, !question.answered);
	},
}));

const Init: React.FC = () => {
	const { init } = useApp$();

	useEffect(() => {
		init();
	}, [init]);

	return <></>;
};

export const InitApp$ = memo(Init);
