const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

require('dotenv').config();

app.use(cors());

const LASTFM_BASE_URL = "https://ws.audioscrobbler.com/2.0/";
const USER = process.env.LASTFM_USER;
const API_KEY = process.env.LASTFM_API_KEY;

app.get('/lastfm', async (req, res) => {
    try {
        const response = await axios.get(LASTFM_BASE_URL, {
            params: {
                method: "user.getrecenttracks",
                user: USER,
                api_key: API_KEY,
                format: "json",
                limit: 1
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});

