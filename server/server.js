const path = require('path');
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// eslint-disable-next-line
app.listen(app.get('port'), () => console.log(`http://localhost:${app.get('port')}`),);
