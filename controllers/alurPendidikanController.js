const db = require('../models/db');
const alurPendidikan = db.alurPendidikan;

exports.create = async (req, res) => {
    try{
        const {riwayat_pendidikan, riwayat_universitas, rowRiwayat, memberId} = req.body;
        await alurPendidikan.create({
            riwayat_pendidikan,
            riwayat_universitas,
            rowRiwayat,
            memberId,
        }, 
        {where: {memberId: memberId}});
        res.status(200).json({response: `new riwayat pendidikan baris ${rowRiwayat} that belong to ${memberId} created`});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

exports.getAll = async (req, res) => {
    try{
        const params = req.params.memberId;
        const allAlurPendidikan = await alurPendidikan.findAll({where: {memberId: params}});
        res.status(200).json({response: allAlurPendidikan});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

exports.update = async (req, res) => {
    try{
        const {memberId, rowRiwayat} = req.params;
        const {riwayat_pendidikan, riwayat_universitas} = req.body;
        await alurPendidikan.update({
            riwayat_pendidikan,
            riwayat_universitas
        }, {where: {memberId: memberId, rowRiwayat: rowRiwayat}});
        res.status(200).json({response: `riwayat pendidikan ${memberId} row ${rowRiwayat} updated`});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

exports.delete = async (req, res) => {
    try{
        const {memberId, rowRiwayat} = req.params;
        await alurPendidikan.destroy({where: {memberId: memberId, rowRiwayat: rowRiwayat}});
        res.status(200).json({response: `riwayat pendidikan ${memberId} row ${rowRiwayat} deleted`});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}