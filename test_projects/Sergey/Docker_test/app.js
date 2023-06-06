const data = [
	'apple',
	'banana',
	'cherry',
	'date',
	'elderberry',
	'fig',
	'grape',
];

const btnElem = document.querySelector('button');

function search() {
	const query = document.getElementById('searchBox').value.toLowerCase();
	const results = data.filter((word) => word.startsWith(query));
	const output = results.length > 0 ? results.join(', ') : 'Ничего не найдено';
	document.getElementById('results').textContent = output;
}

btnElem.addEventListener('click', (e) => {
	e.preventDefault();
	search();
});
