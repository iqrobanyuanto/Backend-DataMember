const app = require('express')();
const memberRoute = require('./routes/memberRoute');
const db = require('./models/db');
const memberseed = require('./dbseeders/memberSeeder');
const adminseed = require('./dbseeders/adminSeeder');
const authRoute = require('./routes/authRoute');



db.check();
memberseed.seed();
adminseed();

app.use('/auth', authRoute);
app.use('/member', memberRoute);

module.exports = app;