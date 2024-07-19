const http = require('http');
const { fetchDataAndSaveToFile } = require('./getDataAndSaveToFile'); // Импортируем функцию из предыдущего файла

const server = http.createServer((req, res) => {
    if (req.url === '/fetchData') {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        const fileName = 'posts_from_server.json';

        fetchDataAndSaveToFile(apiUrl, fileName); // Вызываем функцию для получения данных и сохранения в файл

        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); // Установите кодировку UTF-8
        res.end(`Данные из ${apiUrl} будут сохранены в файл ${fileName}`);
    } else if (req.url === '/') {
        // Обработчик для корневого маршрута
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Добро пожаловать на главную страницу!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Маршрут не найден');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
