# Используем базовый образ Node.js
FROM node

# Копируем файлы в контейнер
COPY . .

# Запускаем команду для запуска приложения
CMD [ "node", "-e", "const http = require('http'); const fs = require('fs'); const server = http.createServer((req, res) => { const html = fs.readFileSync('./index.html', 'utf8'); res.statusCode = 200; res.setHeader('Content-Type', 'text/html'); res.end(html); }); server.listen(8000);" ]
