console.log('API.JS CARGADO CON EXITO');

/* API  */

const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector('#app');

fetch(`${API_URL}/users`)
	.then((response) => response.json())
	.then((users) => {
		users.slice(0, 4).forEach((user, index) => {
			let div = document.createElement('div');
			div.classList.add('user');

			let profileImg = document.createElement('img');
			profileImg.src = 'img/index/testimonios/user.png'; /* ICONO FOTO */
			profileImg.alt = 'Foto de perfil';

			let nameElem = document.createElement('li');
			nameElem.appendChild(document.createTextNode(user.name));

			let emailElem = document.createElement('li');
			emailElem.appendChild(document.createTextNode(user.email));

			let textElem = document.createElement('li');

			/* Agrega texto para cada usuario */
			if (index === 0) {
				textElem.appendChild(document.createTextNode('experiencia increíble'));
			} else if (index === 1) {
				textElem.appendChild(
					document.createTextNode(
						'Cumplieron con todo lo estipulado, excelente la atención de todos'
					)
				);
			} else if (index === 2) {
				textElem.appendChild(
					document.createTextNode(
						'Excelente servicio, sin dudas volvería a elegirlos.'
					)
				);
			} else if (index === 3) {
				textElem.appendChild(
					document.createTextNode('Muy buena atención por Whatsapp')
				);
			}

			let ratingElem = document.createElement('li');
			ratingElem.classList.add('rating');
			ratingElem.innerHTML = 'Calificación: ';
			for (let i = 0; i < 5; i++) {
				let starSpan = document.createElement('span');
				starSpan.innerHTML = '&#9733;';
				ratingElem.appendChild(starSpan);
			}

			div.appendChild(profileImg);
			div.appendChild(nameElem);
			div.appendChild(emailElem);
			div.appendChild(textElem);
			div.appendChild(ratingElem);

			HTMLResponse.appendChild(div);
		});
	});
