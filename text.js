let text = document.getElementById('text');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	text.style.marginTop = value * 0.8 + 'px';
	mountain1.style.left = value * -2.5 + 'px';
	mountain2.style.left = value * 2.5 + 'px';
});
