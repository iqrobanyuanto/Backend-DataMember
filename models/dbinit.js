const seeder = require('../dbseeders/mainSeeder');
const db = require('./db');

module.exports = async () => {
    await db.checkDB();
    await seeder();
};