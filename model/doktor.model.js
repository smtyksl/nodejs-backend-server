module.exports = (sequelize, Sequelize) => {
    const Doktor = sequelize.define('doktor', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ad: {
            type: Sequelize.STRING
        }

    }, { freezeTableName: true, timestamps: false });

    return Doktor;
}
