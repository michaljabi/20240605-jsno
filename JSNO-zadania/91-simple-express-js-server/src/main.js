import { createServer } from 'node:http'
import { URL } from 'node:url';
import process from 'node:process'
import fs from 'node:fs/promises'


const PORT = Number(process.env.PORT) || 3000;

const server = createServer(async (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    switch (req.url) {
        case "/data":
            try {
                const data = await fs.readFile(new URL('../data.json', import.meta.url), 'utf-8');
                res.write(data);
            } catch (e) {
                res.statusCode = 500;
                console.error(e);
                res.write(JSON.stringify({ error: 'Cannot open file' }));
            }
            break;
        default:
            res.statusCode = 404;
            res.write(JSON.stringify({ error: `404 - nie znam ścieżki ${req.url}` }));
    }
    res.end();
})


server.listen(PORT)

server.on('listening', () => {
    console.log(`I am on: http://localhost:${PORT}`)
})

process.on('uncaughtException', (e) => {
    console.log('This is not workng....');
    console.error(e);
})