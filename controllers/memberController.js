const db = require('../models/db');
const member = db.member;

exports.create = async (req,  res) => {
    
    try{
        const {
          status,
          nama,
          nip,
          tempat_lahir,
          tanggal_lahir,
          jenis_kelamin,
          agama,
          golongan_darah,
          nomor_hp,
          alamat_asal,
          universitas,
          fakultas,
          program_studi,
          foto,
        } = req.body;
    
        const newMember = await member.create({
            status,
            nama,
            nip,
            tempat_lahir,
            tanggal_lahir,
            jenis_kelamin,
            agama,
            golongan_darah,
            nomor_hp,
            alamat_asal,
            universitas,
            fakultas,
            program_studi,
            foto,
        });
    
        res.status(200).json({response: newMember});

    }catch(err){
        res.status(500).json({response: err.message});
    }
}

exports.getAll = async (req, res) => {
    try{
        const members = await member.findAll();
        res.status(200).json({response: members});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

exports.getById = async (req, res) => {
    try{
        const memberId = req.params.memberId;
        const memberById = await member.findOne({where: {memberAccountId: memberId}});
        res.status(200).json({response: memberById});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

exports.update = async (req, res) => {
    try{
        const memberId = req.params.memberId;
        const imageProfile = req.file;
        const {
          status,
          nama,
          nip,
          tempat_lahir,
          tanggal_lahir,
          jenis_kelamin,
          agama,
          golongan_darah,
          nomor_hp,
          alamat_asal,
          universitas,
          fakultas,
          program_studi,
          foto,
        } = req.body;

        await member.update(
          {
            status,
            nama,
            nip,
            tempat_lahir,
            tanggal_lahir,
            jenis_kelamin,
            agama,
            golongan_darah,
            nomor_hp,
            alamat_asal,
            universitas,
            fakultas,
            program_studi,
            foto,
          },
          {
            where: {memberAccountId: memberId},
          }
        );
    
        res.status(200).json({response: `member ${nama} data updated`});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

exports.delete = async (req, res) => {
    try {
        const memberId = req.params.memberId;
        const deletedMember = await member.destroy({
        where: { memberAccountId: memberId },
        });
        res.status(200).json({ response: deletedMember });
    } catch (err) {
        res.status(500).json({ response: err.message });
    }
};