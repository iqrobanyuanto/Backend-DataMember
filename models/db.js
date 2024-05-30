const Sequelize = require('sequelize');
require('dotenv').config();

const connect = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
    host: process.env.DBHOST,
    dialect: 'mysql'
});

db = {};
db.seqeuelize = Sequelize;
db.connect = connect;

db.admin = require('./admin')(connect, Sequelize);
db.member = require('./member')(connect, Sequelize);
db.insert_log = require('./insert_log')(connect, Sequelize);
db.check = async () => {
    try {
        await connect.query(`CREATE DATABASE IF NOT EXISTS datamember`);

        connect.options.database = 'test';
        await connect.authenticate();

        await db.admin.sync();
        await db.member.sync();
        await db.insert_log.sync();

    } catch (error) {
        console.error('Error creating database:', error);
    }
}

module.exports = db;