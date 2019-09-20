const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();
let PORT = 3001;

app.use('/', express.static(path.resolve(__dirname, '..', 'client', 'dist')));
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})