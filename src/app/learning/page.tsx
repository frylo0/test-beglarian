import cn from 'clsx';

import { sButton, sMain } from './page.css';

export default function Home() {
	return (
		<main className={cn(sMain)}>
			<button className={cn(sButton)}>Click me</button>
		</main>
	);
}
