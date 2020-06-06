const express = require('express');
const path = require('path');
const chalk = require('chalk');

// Connect mongodb
require('./db/mongoose');

// Import routers
const usersRouter = require('./routers/users');
const tasksRouter = require('./routers/tasks');
const page404 = require('./routers/404');


// Init app
const app = express();

// Public folder
app.use(express.static(path.join(__dirname, '/public')));

// Parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// EJS template engine
app.set('render engine', 'ejs');
app.set('views', 'view');


// const multer = require('multer')
// const upload = multer({
//   dest: 'images'
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send()
// })

// Routers
app.use(usersRouter);
app.use(tasksRouter);
app.use(page404);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(chalk.inverse.green(' Server running...')));
