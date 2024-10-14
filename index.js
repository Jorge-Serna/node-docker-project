import express from 'express';
import router from './routes/routes.js'

const app = express();

const port = process.env.PORT || 3000;

app.use('/', router);

app.use(express.static('public'));

app.set('view engine', 'pug');

app.listen(port, ()=>{
    console.log(`Server running in port ${port}`)
})