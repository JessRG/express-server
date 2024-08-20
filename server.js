const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({ 'users': ['userOne', 'userTwo', 'userThree', 'userFour'] });
});

app.get('/user', async (req, res) => {
    const { gender, nat } = req.query;

    try {
      const response = await fetch(`https://randomuser.me/api?gender=${gender}&nat=${nat}`);
      const json = await response.json();
      res.json(json);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  });

app.listen(5000, () => { console.log('Server started on port 5000')});