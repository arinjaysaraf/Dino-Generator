const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fetch = require('node-fetch');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(express.static('public'))

const api_key = process.env.API_KEY;

app.get('/dinoname', async (req, res) => {
    const fetchapi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
        }
    });
    const dinonameresponce = await fetchapi.json();
    console.log(dinonameresponce);
    res.json(dinonameresponce);
});

app.get('/dinoimage', async (req, res) => {
    const fetchapi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=50", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    });
    const dinoimgresponce = await fetchapi.json();
    console.log(dinoimgresponce);
    res.json(dinoimgresponce);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});