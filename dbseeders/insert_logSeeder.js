const db = require('../models/db');
const insert_logdb = db.insert_log;

const insert_logSeeder = async () => {
    try{
        console.log(typeof(insert_logdb));
        const nama = await insert_logdb.findOne({where: { nama: "ambatuwow" }});
        if (nama) {
            console.log("data insert_log already exist");
            return;
        }
        
        const newInsert_log = {
            "nama": "ambatuwow",
            "email": "ambatuwow@gmail.com",
            "username": "user1",
            "tanggal_input": Date.now()
        };
        await insert_logdb.create(newInsert_log);
    }catch(err){
        console.log(err.message);
    }
};

module.exports = insert_logSeeder;