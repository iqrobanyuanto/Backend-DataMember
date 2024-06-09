module.exports = (db, Sequelize) => {
    const AlurPendidikan = db.define('alur_pendidikan',{
        riwayat_pendidikan: {
            type: Sequelize.STRING,
        },
        riwayat_universitas: {
            type: Sequelize.STRING,
        },
        rowRiwayat: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    })
    return AlurPendidikan;
}