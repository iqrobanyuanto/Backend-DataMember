const adminSeeder = require('./adminSeeder');
const memberSeeder = require('./memberSeeder');
const insert_logSeeder = require('./insert_logSeeder');

const mainSeeder = async () => {
    await adminSeeder();
    await memberSeeder();
    await insert_logSeeder();
}

module.exports = mainSeeder;