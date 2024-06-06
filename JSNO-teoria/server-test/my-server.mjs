// ESM
// z bibliotki node:http
import http from 'node:http'

const PORT = 3030;

const server = http.createServer((req, res) => {

    let bodyStr = '';

    req.on('data', (value) => {
        // console.log("odebrałem");
        // console.log(value.toString());
        // console.log(JSON.parse(value.toString()));
        bodyStr += value.toString();
    })

    req.on('end', () => {
        // console.log('I am ready....')
        if (bodyStr) {
            const bodyAsJS = JSON.parse(bodyStr);
        }
        res.setHeader('Content-Type', 'text/html')
        res.write(`<h1>Hello</h1>, you used method: "${req.method}" on url: ${req.url}`)
        res.write(`\nYou send me body: <pre>${bodyStr}</pre>`)
        res.end();
    })
});

server.on('listening', () => {
    console.log('started on http://localhost:3030')
})

server.listen(PORT);
