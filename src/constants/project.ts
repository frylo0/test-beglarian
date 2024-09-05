import { TClientAuthUsers } from '@/lib/WithClientAuth';

export const clientAuthUsers: TClientAuthUsers = [
	{
		username: 'admin',
		password: '1234',
	},
];

export enum LocalStorageKeys {
	Answers = 'answers',
}
