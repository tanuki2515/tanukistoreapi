const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')


const app = express();
const PORT = 3000;

app.use(express.json());

const whitelist = ['http://localhost'];
const option = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else{
            callback(new Error('No permitido'));
        }

    }
}
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello crayola');
});

app.get('/route-new', (req, res) => {
    res.send('Hola soy una nueva ruta o endpoint');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log('Mi puerto es: ' + PORT);
})
