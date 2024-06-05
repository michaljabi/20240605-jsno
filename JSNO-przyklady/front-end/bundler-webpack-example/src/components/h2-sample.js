import { ExclamationButton } from './exclamation-button';

export function H2Sample ({title, sign = '!'}) {
	const h2 = document.createElement('h2');
	h2.textContent = title;
	h2.appendChild(
		ExclamationButton({
			text: `Dodaj ${sign}`,
			onClick: () => h2.append(sign)
		})
	)
	return h2;
}
