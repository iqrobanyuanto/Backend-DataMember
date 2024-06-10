const db = require('../models/db');
const akunMemberrdb = db.memberAccount;
const bcrypt = require("bcrypt");

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
        newMemberAccount.password = await bcrypt.hash(newMemberAccount.password, 10);

        const newMember = {
            "nama": "xeloreon"
        };

        const newAlur = {
            "riwayat_pendidikan": "S1",
            "riwayat_universitas": "Telkom University",
            "rowRiwayat": 1
        }

        const memberAkun = await akunMemberrdb.create(newMemberAccount);
        const memberData = await memberAkun.createMember(newMember);
        await memberData.createAlur_pendidikan(newAlur);
    
    
    }catch(err){
        console.log(err.message);
    }
}

module.exports = memberAccountSeed;