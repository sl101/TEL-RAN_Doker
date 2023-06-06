const http = require('http');
const fs = require('fs');

function startServer() {
	const server = http.createServer((req, res) => {
		const html = fs.readFileSync('./index.html', 'utf8');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(html);
	});

	server.listen(8000, () => {
		console.log('Server is listening on port 8000');
	});
}

module.exports = { startServer };
