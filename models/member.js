module.exports = (db, Sequelize) =>{
    const Member = db.define("member", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
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
        pendidikan_s1: {
            type: Sequelize.STRING
        },
        universitas_s1: {
            type: Sequelize.STRING
        },
        pendidikan_s2: {
            type: Sequelize.STRING
        },
        universitas_s2: {
            type: Sequelize.STRING
        },
        pendidikan_s3: {
            type: Sequelize.STRING
        },
        universitas_s3: {
            type: Sequelize.STRING
        },
        foto: {
            type: Sequelize.STRING
        },
    });
    return Member;
};