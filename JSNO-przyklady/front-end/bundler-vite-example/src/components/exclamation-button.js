export function ExclamationButton({text, onClick}) {
	 const btn = document.createElement('button');
	 btn.innerText = text;
	 btn.addEventListener('click', onClick)
	 return btn;
}
