const app = require('express')();
const memberRoute = require('./routes/memberRoute');
const dbinit = require('./models/dbinit');
const authRoute = require('./routes/authRoute');
const insertLogRoute = require('./routes/insert_logRoute');
const alurPendidikanRoute = require('./routes/alurPendidikanRoute'); 
const fotoProfilRoute = require('./routes/fotoProfilRoute');
const cors = require('cors');

dbinit();

app.use(cors({
    origin: '*'
}));

app.use('/auth', authRoute);
app.use('/member', memberRoute);
app.use('/insert-log', insertLogRoute);
app.use('/alur-pendidikan', alurPendidikanRoute);
app.use('/foto-profil', fotoProfilRoute);

module.exports = app;