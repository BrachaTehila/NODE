const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
const apiKey = 'rnd_CxwmsvSbT9I829NXtMQqJUSsOHRe'; // החליפי ב-API Key שיצרת

app.get('/apps', async (req, res) => {
  try {
    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});