const Sequelizer = require('sequelize');
require('dotenv').config();
const adminModel = require('./admin');
const memberModel = require('./member');
const insert_logModel = require('./insert_log');
const memberAccount = require('./akunMember');
const alurPendidikan = require('./alurPendidikan');

const dbname = process.env.DBNAME || process.env.DBNAMELOCAL;
const dbuser = process.env.DBUSER || process.env.DBUSERLOCAL;
const dbpass = process.env.DBPASS || process.env.DBPASSLOCAL;
const dbhost = process.env.DBHOST || process.env.DBHOSTLOCAL;

const dbms = !process.env.PORT ? 'mysql' : 'mssql';

const connect = new Sequelizer(dbname, dbuser, dbpass, {
    host: dbhost,
    dialect: dbms,
    dialectOptions: {
        requestTimeout: 60000
    }
});

db = {};
db.seqeuelize = Sequelizer;
db.connect = connect;
db.admin = adminModel(connect, Sequelizer);
db.member = memberModel(connect, Sequelizer);
db.insert_log = insert_logModel(connect, Sequelizer);
db.memberAccount = memberAccount(connect, Sequelizer);
db.alurPendidikan = alurPendidikan(connect, Sequelizer);


db.memberAccount.hasOne(db.member,{
    foreignKey: {
        allowNull: false
    },
})
db.member.belongsTo(db.memberAccount);

db.member.hasMany(db.alurPendidikan,{
    foreignKey: {
        allowNull: false
    },
})
db.alurPendidikan.belongsTo(db.member);


db.checkDB = async () => {    
    try {
        await connect.authenticate();
        await db.admin.sync();
        await db.memberAccount.sync();
        await db.member.sync();
        await db.alurPendidikan.sync()
        await db.insert_log.sync();

    } catch (error) {
        console.error("Error creating database:", error);
    }
};

module.exports = db;