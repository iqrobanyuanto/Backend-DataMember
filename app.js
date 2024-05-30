const app = require('express')();
const memberRoute = require('./routes/memberRoute');
const db = require('./models/db');
const seed = require('./dbseeders/memberSeeder');



db.check();
seed.seed();

app.use('/member', memberRoute);

module.exports = app;