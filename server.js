const proxy = require('express-http-proxy');
const express = require('express')
  path = require('path');

const app = express();
const port = process.env.PORT || 3001;

var staticFilesPath = path.resolve(__dirname, 'build');

app.use(express.static(staticFilesPath));

app.use('/media1', proxy('https://media1.notahoneypot.me'));
app.use('/media2', proxy('https://media2.notahoneypot.me'));

app.listen(port, () => console.log(`App listening on port ${port}!`))