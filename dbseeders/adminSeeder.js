const db = require('../models/db');
const adminrdb = db.admin;
const adminSeed = async () => {
    try{
        console.log(typeof(adminrdb));
        const username = await adminrdb.findOne({where: { username: "admin" }});
        if (username) {
            console.log("data admin already exist");
            return;
        }
        
        const newAdmin = {
            "username": "admin",
            "password": "admin",
        };

        await adminrdb.create(newAdmin);
    
    
    }catch(err){
        console.log(err.message);
    }
}

module.exports = adminSeed;