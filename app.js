const app = require('express')();
const memberRoute = require('./routes/memberRoute');
const dbinit = require('./models/dbinit');
const authRoute = require('./routes/authRoute');
const insertLogRoute = require('./routes/insert_logRoute');

dbinit();

app.use('/auth', authRoute);
app.use('/member', memberRoute);
app.use('/insert-log', insertLogRoute);

module.exports = app;