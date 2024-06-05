import app from './app.js'

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Nasłuchuję na porcie: ${PORT} !`);
    console.log(`http://localhost:${PORT} !`);
});












