const adminSeeder = require('./adminSeeder');
const memberSeeder = require('./memberSeeder');
const insert_logSeeder = require('./insert_logSeeder');
const accountMemberSeeder = require('./akunMemberSeeder');

const mainSeeder = async () => {
    await adminSeeder();
    await memberSeeder();
    await insert_logSeeder();
    await accountMemberSeeder();
}

module.exports = mainSeeder;