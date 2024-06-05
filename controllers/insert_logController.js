const db = require('../models/db');

exports.create = async (req, res) => {
    try {
        const { nama, nip, program_studi, tanggal_input } = req.body;
        const newInsert_log = await db.insert_log.create({
            nama,
            nip,
            program_studi,
            tanggal_input
        });
        res.status(200).json({ response: newInsert_log });
    } catch (err) {
        res.status(500).json({ response: err.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const allInsert_log = await db.insert_log.findAll();
        res.status(200).json({ response: allInsert_log });
    } catch (err) {
        res.status(500).json({ response: err.message });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        await db.insert_log.destroy();
        res.status(200).json({ response: "Semua Data Log berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ response: err.message });
    }
}