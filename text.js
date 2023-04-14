/* NAV RESPONSIVE */
iconobarras = document.querySelector('.icono-barras');
nav = document.querySelector('nav');
iconobarras.onclick = function () {
	nav.classList.toggle('active');
};

/* WHATSAP BOTON */

window.addEventListener('scroll', function () {
	var scrollPosition = window.scrollY;
	if (scrollPosition > 400) {
		document.querySelector('.btn-wsp').classList.add('show-btn');
		document.querySelector('.btn-wsp').classList.remove('hide-btn');
	} else {
		document.querySelector('.btn-wsp').classList.add('hide-btn');
		document.querySelector('.btn-wsp').classList.remove('show-btn');
	}
});

/* PORTADA INDEX */
let bg = document.getElementById('bg');
let text = document.getElementById('text');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let ush = document.getElementById('ush');

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	bg.style.width = 100 + value / 30 + '%';
	text.style.marginTop = value * -0.7 + 'px';
	mountain1.style.left = value * -2.5 + 'px';
	mountain1.style.bottom = value * -1.5 + 'px';
	mountain2.style.left = value * 2.5 + 'px';
	mountain2.style.bottom = value * -1.5 + 'px';
});

/* PORTADA USHUAIA  */

/* ANDA A MEDIAS */
/* const seccion = document.getElementById('miSeccion');
const imagen = document.getElementById('miImagen');
const seccionAncho = seccion.offsetWidth;
const imagenAncho = imagen.offsetWidth;

function moverImagen() {
	const distancia = seccionAncho - imagenAncho;
	const scrollPosicion = window.scrollY;
	const maxScroll = seccion.offsetHeight - window.innerHeight;
	const porcentaje = scrollPosicion / maxScroll;
	imagen.style.transform = `translateX(-${distancia * porcentaje}px)`;
}

window.addEventListener('scroll', moverImagen); */

/* NO ANDA PERO ME PARECE UNA BUENA IDEA */
/* const seccion = document.getElementById('miSeccion');
const imagen = document.getElementById('miImagen');
const seccionAncho = seccion.offsetWidth;
const imagenAncho = imagen.offsetWidth;

function moverImagen() {
	const distancia = (seccionAncho - imagenAncho) * 2;
	const scrollPosicion = window.scrollY;
	const maxScroll = seccion.offsetWidth - window.innerWidth;
	const porcentaje = scrollPosicion / maxScroll;

	if (scrollPosicion >= maxScroll) {
		imagen.style.transform = `translateX(-${distancia}px)`;
	} else {
		imagen.style.transform = `translateX(-${distancia * porcentaje}px)`;
	}
}

window.addEventListener('scroll', moverImagen); */

/* const image = document.getElementById('miImagen');

window.addEventListener('scroll', () => {
	const scrolled = window.scrollY;
	image.style.transform = `translateX(-${scrolled}px)`;
});
 */

/* CASI FUNCIONA. FALTA POCO */
/* $(window).scroll(function () {
	var scroll_position = $(window).scrollTop() / 2;
	$('.portada').css({
		'background-position-x': -scroll_position + 'px',
	});
}); */
