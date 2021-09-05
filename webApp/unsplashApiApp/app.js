const express = require('express');
const { dirname } = require('path');
require('dotenv').config();
const axios = require('axios');

const unsplash = require('./unsplash.initial');
const app = express();
const path = require('path');

const port = process.env.PORT || 300;
const config = {
    Authorization: process.env.UNSPLASH_ACCESS_KEY,
};

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.get('/', async (req, res) => {
    const fetchedphotos = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30`
    );
    const data = await fetchedphotos.data;
    res.render('homepage', { data });
});
app.get('/api', async (req, res) => {
    const fetchedphotos = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    const data = await fetchedphotos.data;
    res.render('commons/carousel', { data });
});
app.listen(port, () => {
    console.log(`Listening from ${port}...`);
});
