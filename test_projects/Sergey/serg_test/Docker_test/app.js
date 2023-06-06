const data = [
	'apple',
	'banana',
	'cherry',
	'date',
	'elderberry',
	'fig',
	'grape',
];

function search() {
	const query = document.getElementById('searchBox').value.toLowerCase();
	const results = data.filter((word) => word.startsWith(query));
	// console.log(results);
	const output = results.length > 0 ? results.join(', ') : 'Ничего не найдено';
	document.getElementById('results').textContent = output;
}
