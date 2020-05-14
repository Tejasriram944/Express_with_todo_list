const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// connect DB
connectDB();

// Init middleWare
app.use(express.json({ extended: false }));

// app.get('/', (req, res) =>
//   res.json({ msg: 'hello world connecting to the react Api...' })
// );

// routers
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todolist', require('./routes/todolist'));

//serve static assests in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, console.log(`server started at ${PORT}`));
