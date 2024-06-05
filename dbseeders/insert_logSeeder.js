const db = require('../models/db');
const insert_logdb = db.insert_log;

const insert_logSeeder = async () => {
    try{
        console.log(typeof(insert_logdb));
        const nama = await insert_logdb.findOne({where: { nama: "user" }});
        if (nama) {
            console.log("data insert_log already exist");
            return;
        }
        
        const newInsert_log = {
            "nama": "user",
            "nip": 1020310203,
            "program_studi": "S1 Rekayasa Perangkat Lunak",
            "tanggal_input": Date.now()
        };
        await insert_logdb.create(newInsert_log);
    }catch(err){
        console.log(err.message);
    }
};

module.exports = insert_logSeeder;