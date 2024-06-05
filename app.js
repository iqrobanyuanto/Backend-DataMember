const app = require('express')();
const memberRoute = require('./routes/memberRoute');
const dbinit = require('./models/dbinit');
const authRoute = require('./routes/authRoute');

dbinit();

app.use('/auth', authRoute);
app.use('/member', memberRoute);

module.exports = app;