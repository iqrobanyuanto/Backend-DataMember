const Sequelizer = require('sequelize');
require('dotenv').config();
const mysql = require('mysql2');
const adminModel = require('./admin');
const memberModel = require('./member');
const insert_logModel = require('./insert_log');

const connect = new Sequelizer(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
    host: process.env.DBHOST,
    dialect: 'mysql',
    dialectModule: mysql
});

db = {};
db.seqeuelize = Sequelizer;
db.connect = connect;
db.admin = adminModel(connect, Sequelizer);
db.member = memberModel(connect, Sequelizer);
db.insert_log = insert_logModel(connect, Sequelizer);

db.checkDB = async () => {    
    try {
        await connect.authenticate()
        await db.admin.sync();
        await db.member.sync();
        await db.insert_log.sync();

    } catch (error) {
        console.error("Error creating database:", error);
    }
};

module.exports = db;