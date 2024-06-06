const db = require('../models/db');
const akunMemberrdb = db.memberAccount;
const memberAccountSeed = async () => {
    try{
        console.log(typeof(akunMemberrdb));
        const username = await akunMemberrdb.findOne({where: { username: "user" }});
        if (username) {
            console.log("data memberAccount already exist");
            return;
        }
        
        const newMemberAccount = {
            "email": "username@example.com",
            "username": "user",
            "password": "user",
        };

        await akunMemberrdb.create(newMemberAccount);
    
    
    }catch(err){
        console.log(err.message);
    }
}

module.exports = memberAccountSeed;