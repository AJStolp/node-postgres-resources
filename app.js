const express = require('express');
const morgan = require('morgan');
const app = express();

const cors = require('cors');

app.use(morgan('common'));
app.use(cors());

app.get('/apps', (req, res) => {
    
});





app.listen(8000, () => {
    console.log('Yo! I am listening :). Have fun!')
});