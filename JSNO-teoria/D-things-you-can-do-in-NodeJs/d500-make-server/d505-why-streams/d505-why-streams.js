const fs = require('fs')
const path = require('path')
const http = require('http');
const PORT = 4200;
const server = http.createServer((req, res) => {
	const filePath = path.join(__dirname, 'd505-why-streams.mp3');
	const totalSize = fs.statSync(filePath).size;
	let rs;
	/*
	// Obsługiwanie paska postępu (graj utwór od konkretnej sekundy)
	// Będzie się to sprowadzało do poprawnej obsługi header'a "range"
	const { range } = req.headers;
	if (range) {
		const [start = 0, end = totalSize] = range.match(/\d+/g).map(Number) || [0, totalSize];
		res.writeHead(206, {
			'Content-Range': `bytes ${start}-${end-1}/${totalSize}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': end - start,
			'Content-Type': 'audio/mpeg'
		});
		rs = fs.createReadStream(filePath, {start, end});
	} else {

	 */
		res.writeHead(200, { 'Content-Length': totalSize, 'Content-Type': 'audio/mpeg' });
		rs = fs.createReadStream(filePath);
	// }
	rs.pipe(res);
	rs.on('error', error => {
		res.end(error)
	})
})

server.listen(PORT);
server.on('listening', () => {
	console.log('Serwer - który wysyła strumień z MP3 nasłuchuje na porcie:', PORT);
})
