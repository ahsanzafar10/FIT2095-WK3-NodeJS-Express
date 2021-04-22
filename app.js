let express = require('express');
let app = express();
let print = console.log;

let warehouseRouter = require('./routers/warehouseRoutes');
db = [];

app.use('/warehouse', warehouseRouter);


app.listen(8080);