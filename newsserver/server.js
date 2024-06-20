const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const API_KEY = '26142e7ebdda43f89b674e2db3c88eee';
const BASE_URL = 'https://newsapi.org/v2';

app.get('/api/top-headlines', async (req, res) => {
  const { country, category, page } = req.query;

  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: API_KEY,
        country,
        category,
        page,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/everything', async (req, res) => {
  const { q, page } = req.query;

  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        apiKey: API_KEY,
        q,
        page,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error searching news:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
