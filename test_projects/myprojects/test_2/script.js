'use strict';

const formElem = document.querySelector('form');
const pElem = document.querySelector('p');

formElem.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(e.target.name.value);
	pElem.innerText = '';
	pElem.innerText = e.target.name.value;
	e.target.name.value = '';
});
