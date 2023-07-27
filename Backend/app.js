
const express = require('express');

const sequelize= require('./util/database');

const cors = require('cors');

const app = express();
app.use(cors());

const expenseRoutes = require('./routes/expense');

app.use(express.json());

app.use('/expense', expenseRoutes);

sequelize.sync()
.then(app.listen(3000))
.catch(err=> console.log(err));