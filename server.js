const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// connect DB
connectDB();

// Init middleWare
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'hello world connecting to the react Api...' })
);

// routers
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todolist', require('./routes/todolist'));

app.listen(PORT, console.log(`server started at ${PORT}`));
