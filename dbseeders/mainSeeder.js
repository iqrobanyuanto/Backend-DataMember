const adminSeeder = require('./adminSeeder');
const insert_logSeeder = require('./insert_logSeeder');
const accountMemberSeeder = require('./akunMemberSeeder');

const mainSeeder = async () => {
    await adminSeeder();
    await accountMemberSeeder();
    await insert_logSeeder();
}

module.exports = mainSeeder;