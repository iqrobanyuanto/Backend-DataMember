module.exports = (db, Sequelize) =>{
    const Member = db.define("member", {
        status: {
            type: Sequelize.STRING
        },
        nama: {
            type: Sequelize.STRING
        },
        nip: {
            type: Sequelize.INTEGER
        },
        tempat_lahir: {
            type: Sequelize.STRING
        },
        tanggal_lahir: {
            type: Sequelize.DATE
        },
        jenis_kelamin: {
            type: Sequelize.STRING
        },
        agama: {
            type: Sequelize.STRING
        },
        golongan_darah: {
            type: Sequelize.CHAR
        },
        nomor_hp: {
            type: Sequelize.STRING
        },
        alamat_asal: {
            type: Sequelize.STRING
        },
        universitas: {
            type: Sequelize.STRING
        },
        fakultas: {
            type: Sequelize.STRING
        },
        program_studi: {
            type: Sequelize.STRING
        },
        foto: {
            type: Sequelize.STRING
        },
    });
    return Member;
};