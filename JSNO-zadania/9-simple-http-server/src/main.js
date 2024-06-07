import { createServer } from 'node:http'
import process from 'node:process'
import fs from 'node:fs/promises'


const PORT = process.env.PORT || 3000;

const server = createServer(async (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    switch (req.url) {
        case "/data":
            const data = await fs.readFile('data.json', 'utf-8');
            res.write(data);
            break;
        default:
            res.statusCode = 404;
            res.write(JSON.stringify({ error: `404 - nie znam ścieżki ${req.url}` }));
    }
    res.end();
})


server.listen(3000)

server.on('listening', () => {
    console.log(`I am on: http://localhost:${PORT}`)
})