const express = require('express');
const app = express();
const passport = require('passport');
const ideasRouter = require("./routes/ideas");
const commentsRouter = require("./routes/comments");
const usersRouter = require('./routes/users');
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(express.json());
app.use(passport.initialize());
// require("./middleware/passport")(passport);
// app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use('/api/',ideasRouter);
app.use('/api/', commentsRouter);
app.use('/api/', usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

