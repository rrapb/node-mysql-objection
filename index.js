const express = require('express');
const app = express();
const ideasRouter = require("./routes/ideas");
const commentsRouter = require("./routes/comments");
const usersRouter = require('./routes/users')
require('dotenv').config()

app.use(express.json());
app.use('/api/',ideasRouter);
app.use('/api/', commentsRouter);
app.use('/api/', usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

