const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const routes = require('./modules/routes');

app.use(bodyParser.json());
app.use(express.static('build'));
app.use('/', routes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
