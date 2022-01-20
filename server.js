const express = require('express');
require('dotenv').config();
const app = express();

const cors = require('cors');
const morgan = require('morgan');
const route = require('./routes/Router');

//middlewares...
app.use(morgan('tiny'));
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', route);



//Error handling....

const notFound = (req, res, next) => {
    const error = new Error('Not Found');
    res.status(404);
    next(error)
}


const errorHandler = (error, req, res, next) => {
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}

//error..middleware...

app.use(notFound);

app.use(errorHandler);



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
})