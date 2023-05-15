console.log('API.JS CARGADO CON EXITO');

/* API REST */

// Obtén una referencia al contenedor donde se mostrarán los hoteles
const hotelContainer = document.getElementById('hotel-container');

// Realiza la solicitud a la API

const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa935b0b5amsh4eeadff2138c8f1p1dc3d1jsn6224d86ee5e0',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
	},
};

async function fetchData() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
function displayData(data) {
	const dataContainer = document.querySelector('.data-container');
	// Aquí puedes manipular los datos recibidos y mostrarlos en el contenedor
	// Por ejemplo, puedes crear elementos HTML dinámicamente para cada dato y agregarlos al contenedor.
	dataContainer.innerHTML = JSON.stringify(data);
}

fetchData();
