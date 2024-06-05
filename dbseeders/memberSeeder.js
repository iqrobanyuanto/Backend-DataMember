const db = require('../models/db');
const memberdb = db.member;

const memberSeed = async () => {
    try{
        console.log(typeof(memberdb));
        const username = await memberdb.findOne({where: { username: "user" }});
        if (username) {
            console.log("data member already exist");
            return;
        }
        
        const newMember = {
            "username": "user",
            "password": "belumdiencrypt",
            "status": "admin",
            "nama": "dogo",
            "nip": 1020310203,
            "tempat_lahir": "Bandung",
            "tanggal_lahir": "2024-05-30 20:09:12",
            "jenis_kelamin": "Laki-laki",
            "agama": "Katolik",
            "golongan_darah": "O",
            "nomor_hp": "0291020382991",
            "alamat_asal": "Bandung",
            "universitas": "Telkom University",
            "fakultas": "Informatika",
            "program_studi": "S1 Rekayasa Perangkat Lunak",
            "pendidikan_s1": "Informatika",
            "universitas_s1": "Telkom University",
            "pendidikan_s2": "Perfilman",
            "universitas_s2": "Telkom University",
            "pendidikan_s3": "Perikanan",
            "universitas_s3": "Telkom University",
            "foto": "path foto,"
        };
        await memberdb.create(newMember);
    
    
    }catch(err){
        console.log(err.message);
    }
}

module.exports = memberSeed;