const API_URL = "https://jsonplaceholder.typicode.com/users";
const HTMLResponse = document.querySelector("#app");

fetch(API_URL)
	.then(response => response.json())
	.then(users => {
		const tpl = users.map(user => `<li>${user.name} ${user.email} </li>`);
		HTMLResponse.innerTHML = `<ul>${tpl}</ul>`;
});

/*
https://www.w3schools.com/js/js_datatypes.asp
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
https://www.youtube.com/watch?v=G-j5SI7Qitk
file:///C:/Users/USUARIO/Desktop/Tutorial/Javascript/Peticion.html
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/guide/
https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-es#requisitos-previos
*/
