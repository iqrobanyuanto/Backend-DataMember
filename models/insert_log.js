module.exports = (db, Sequelize) =>{
    const Insert_log = db.define("insert_log", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        member_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        nama: {
            type: Sequelize.STRING
        },
        nip: {
            type: Sequelize.INTEGER
        },
        program_studi: {
            type: Sequelize.STRING
        },
        tanggal_input: {
            type: Sequelize.DATE
        }
    });
    return Insert_log;
};