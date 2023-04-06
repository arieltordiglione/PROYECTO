/* NAV RESPONSIVE */
hamburger = document.querySelector('.hamburger');
nav = document.querySelector('nav');
hamburger.onclick = function () {
	nav.classList.toggle('active');
};

/* PORTADA INDEX */
let bg = document.getElementById('bg');
let text = document.getElementById('text');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	bg.style.width = 100 + value / 30 + '%';
	text.style.marginTop = value * -0.7 + 'px';
	mountain1.style.left = value * -2.5 + 'px';
	mountain1.style.bottom = value * -1.5 + 'px';
	mountain2.style.left = value * 2.5 + 'px';
	mountain2.style.bottom = value * -1.5 + 'px';
});
