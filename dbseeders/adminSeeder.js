const db = require('../models/db');
const adminrdb = db.admin;

module.exports = async () => {
    try{
        const username = await adminrdb.findOne({ where: { username: "admin" } });
        if (username) {
            console.log("username already exist");
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
