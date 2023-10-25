const express = require('express');
const app = express();
const db = require("./db")
const pizza = require("./models/pizzaModel")
app.use(express.json())

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')


app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)


app.listen(6000, () => {
    console.log(' app listening on port 6000!');
});

