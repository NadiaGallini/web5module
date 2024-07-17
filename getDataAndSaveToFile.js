// getDataAndSaveToFile.js
const axios = require('axios');
const fs = require('fs');

async function fetchDataAndSaveToFile(url, filename) {
    try {
        const response = await axios.get(url);
        const data = response.data;
        fs.writeFileSync(filename, JSON.stringify(data, null, 2));
        console.log(`Данные успешно записаны в файл ${filename}`);
    } catch (error) {
        console.error(`Произошла ошибка: ${error.message}`);
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const fileName = 'posts.json';

fetchDataAndSaveToFile(apiUrl, fileName);
